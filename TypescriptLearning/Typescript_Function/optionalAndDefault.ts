function formatScore(name: string, score: number, unit: string = "points"): string {
  return name + " scored " + score + " " + unit;
}

function describe(name: string, city?: string): string {
  if (city === undefined) {
    return name + " has no city yet";
  }
  return name + " is in " + city;
}

function optionalAndDefault(): void {
  console.log(formatScore("Asha", 18));
  console.log(formatScore("Ravi", 21, "marks"));
  console.log(describe("Bikash"));
  console.log(describe("Bikash", "Bhubaneswar"));
}

optionalAndDefault();
