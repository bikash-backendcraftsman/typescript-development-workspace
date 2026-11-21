function tupleBasics(): void {
  const point: [number, number] = [12, 8];
  const entry: [string, boolean] = ["published", true];

  const [x, y] = point;
  const [label, flag] = entry;

  console.log("point", x, y);
  console.log("entry", label, flag);
}

tupleBasics();
