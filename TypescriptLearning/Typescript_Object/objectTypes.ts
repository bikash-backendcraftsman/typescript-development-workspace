type Book = {
  title: string;
  pages: number;
  author: {
    name: string;
    active: boolean;
  };
};

function objectTypes(): void {
  const book: Book = {
    title: "Learning TypeScript",
    pages: 120,
    author: {
      name: "Bikash",
      active: true,
    },
  };

  console.log(book.title, book.pages, book.author.name, book.author.active);
}

objectTypes();
