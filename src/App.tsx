import { useState, useEffect } from 'react';
import { BookList, type Book } from "./components/BookList";
import { Search } from 'lucide-react';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/libros')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setBooks(data);
    })
    .catch(error => console.error('Error al obtener los libros:', error));
  }, []);
  
  return (
    <div className="library-container">
      <header className="header">
        <h1 className="main-title">Biblioteca digital</h1>
        <p className="subtitle">Catalogo bibliografico</p>
      </header>

    <div className="search-bar-container">
      <div className="search-imput-wrapper">
        <span className="search-icon"><Search size={20} />
        </span>
        <input
        type="text"
        pleaceholder="Buscar por nombre, titulo o categoria"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
    <button className="btn-access">Acceder a biblioteca</button>
  </div>

      <BookList books={books} />
    </div>

  );
}
export default App;