class Counter {
  value: number;

  constructor(start: number) {
    this.value = start;
  }

  increment(): number {
    this.value = this.value + 1;
    return this.value;
  }
}

function classBasics(): void {
  const counter = new Counter(0);
  console.log(counter.increment());
  console.log(counter.increment());
}

classBasics();
