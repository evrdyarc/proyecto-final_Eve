import api from "./api";
import type { Book } from "../types/book";

export const getBooks = async () => {
  const response = await api.get<Book[]>('/api/libros');
  return response.data;

};

export const createBook = async (libro: Book) => {
  const response = await api.post('/api/libros', libro);
  return response.data;
};

export const updateBook = async (id: string, libro: Book) => {
  const response = await api.put(`/api/libros/${id}`, libro);
  return response.data;
};

export const deleteBook = async (id: string) => {
  const response = await api.delete(`/api/libros/${id}`);
}