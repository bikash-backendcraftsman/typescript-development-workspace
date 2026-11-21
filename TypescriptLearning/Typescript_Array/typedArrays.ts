function typedArrays(): void {
  const scores: number[] = [10, 20, 30];
  const topics: Array<string> = ["types", "functions", "generics"];

  scores.push(40);
  const total = scores.reduce((sum, value) => sum + value, 0);

  console.log(topics.join(", "));
  console.log("total", total);
}

typedArrays();
