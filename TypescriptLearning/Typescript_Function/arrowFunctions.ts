const multiply = (left: number, right: number): number => left * right;

const label = (topic: string): string => `Topic: ${topic}`;

function arrowFunctions(): void {
  console.log(multiply(3, 7));
  console.log(label("functions"));
}

arrowFunctions();
