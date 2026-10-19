 import { useEffect, useState } from "react";
 import type { Book } from "../types/book";
 import { getBooks } from "../services/bookService";

 export const BookList = () =>{
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        getBooks().then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h2>Lista de Libros </h2>
            <ul>
                {books.map(book => (
                    <li key={book._id}>{book.title} - {book.author}</li>
                ))}
            </ul>
        </div>
    );
 };