import api from "./api";
import type { Book } from "../types/book";

export const getBooks = async () => {
  const response = await api.get<Book[]>('/books');
  return response.data;

};

export const createBook = async (book: Book) => {
  const response = await api.post('/books', book);
  return response.data;
};

export const updateBook = async (id: string, book: Book) => {
  const response = await api.put(`/books/${id}`, book);
  return response.data;
};

export const deleteBook = async (id: string) => {
  const response = await api.delete(`/books/${id}`);
  return response.data;
};