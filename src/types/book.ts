export interface  Book {
    _id?: string;
    titulo: string;
    autor: string;
    categoria?: string;
    estado?: "disponible" | "prestado" | "vencido";
    fechaPrestamo?: string | null;
    fechaDevolucion?: string | null;
    description?: string;
    year?: number;
    available?: boolean;
  }   