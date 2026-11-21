function printId(id: number | string): void {
  console.log("id", id);
}

function unionTypes(): void {
  printId(101);
  printId("TS-101");
}

unionTypes();
