export type Book = {
    id?: number;
    title: string;
    image: string;
    description: string;
    genre: string;
    status?: string | null,
    review?: string | null,
  };

  export type createBook = Omit<Book,"id">