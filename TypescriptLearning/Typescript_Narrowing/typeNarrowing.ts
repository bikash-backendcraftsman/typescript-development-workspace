function formatId(id: number | string): string {
  if (typeof id === "number") {
    return "numeric-" + id.toFixed(0);
  }
  return id.toUpperCase();
}

type Dog = { kind: "dog"; bark: string };
type Cat = { kind: "cat"; meow: string };

function speak(animal: Dog | Cat): string {
  if (animal.kind === "dog") {
    return animal.bark;
  }
  return animal.meow;
}

function typeNarrowing(): void {
  console.log(formatId(7));
  console.log(formatId("abc"));
  console.log(speak({ kind: "dog", bark: "woof" }));
  console.log(speak({ kind: "cat", meow: "meow" }));
}

typeNarrowing();
