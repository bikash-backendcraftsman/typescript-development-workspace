function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

function pair<A, B>(left: A, right: B): [A, B] {
  return [left, right];
}

function genericFunctions(): void {
  console.log(firstItem([3, 1, 4]));
  console.log(firstItem(["types", "generics"]));
  console.log(pair("score", 95));
}

genericFunctions();
