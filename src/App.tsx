import { useState, useEffect } from 'react';
import { BookList, type Book } from "./components/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

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
      <BookList books={books} />
    </div>
  );
}
export default App;