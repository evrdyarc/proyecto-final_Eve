import React from 'react';

// Definimos la interfaz del Libro según tu backend (en español)
export interface Book {
  _id?: string;
  id?: string;
  titulo: string;
  autor: string;
  descripcion?: string;
  portada?: string;
  categoria?: string;
  precio?: number;
}

interface BookListProps {
  books: Book[];
  onSelectBook?: (book: Book) => void;
  onDeleteBook?: (id: string) => void;
}

export const BookList: React.FC<BookListProps> = ({ books, onSelectBook, onDeleteBook }) => {
  if (!books || books.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
        <p>No hay libros disponibles en la librería.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
        padding: '1.5rem 0',
      }}
    >
      {books.map((book) => {
        const bookId = book._id || book.id || '';
        return (
          <div
            key={bookId}
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <div>
              {book.portada && (
                <img
                  src={book.portada}
                  alt={book.titulo}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                  }}
                />
              )}
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>
                {book.titulo}
              </h3>
              <p style={{ margin: '0 0 0.5rem 0', color: 'var(--accent)', fontWeight: 600 }}>
                {book.autor}
              </p>
              {book.categoria && (
                <span
                  style={{
                    fontSize: '0.8rem',
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: '0.75rem',
                  }}
                >
                  {book.categoria}
                </span>
              )}
              {book.descripcion && (
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.4',
                  }}
                >
                  {book.descripcion}
                </p>
              )}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              {onSelectBook && (
                <button
                  onClick={() => onSelectBook(book)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'var(--accent)',
                    color: '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Editar
                </button>
              )}
              {onDeleteBook && (
                <button
                  onClick={() => onDeleteBook(bookId)}
                  style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  Borrar
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
