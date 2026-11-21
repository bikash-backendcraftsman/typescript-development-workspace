function letAndConst(): void {
  let count = 1;
  console.log("let before change", count);

  count = 2;
  console.log("let after change", count);

  const course = "TypeScript";
  console.log("const binding", course);

  if (true) {
    let count = 24;
    const course = "block course";
    console.log("block let", count);
    console.log("block const", course);
  }

  console.log("outer let still", count);
  console.log("outer const still", course);
}

letAndConst();
