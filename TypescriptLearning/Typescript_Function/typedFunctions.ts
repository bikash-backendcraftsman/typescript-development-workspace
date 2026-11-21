function add(left: number, right: number): number {
  return left + right;
}

function greet(name: string): string {
  return "Hello, " + name;
}

function typedFunctions(): void {
  console.log(add(4, 6));
  console.log(greet("Bikash"));
}

typedFunctions();
