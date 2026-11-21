interface Box<T> {
  value: T;
}

function readBox<T>(box: Box<T>): T {
  return box.value;
}

function genericInterfaces(): void {
  const numberBox: Box<number> = { value: 42 };
  const textBox: Box<string> = { value: "typed box" };

  console.log(readBox(numberBox));
  console.log(readBox(textBox));
}

genericInterfaces();
