interface Product {
  name: string;
  price: number;
}

function totalPrice(products: Product[]): number {
  return products.reduce((sum, product) => sum + product.price, 0);
}

function expensive(products: Product[], minimum: number): Product[] {
  return products.filter((product) => product.price >= minimum);
}

function practiceSessionOne(): void {
  const cart: Product[] = [
    { name: "notebook", price: 80 },
    { name: "pen", price: 15 },
    { name: "lamp", price: 240 },
  ];

  console.log("total", totalPrice(cart));
  console.log(
    "expensive",
    expensive(cart, 50).map((product) => product.name)
  );
}

practiceSessionOne();
