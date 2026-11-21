type Direction = "north" | "south" | "east" | "west";
type HttpCode = 200 | 404 | 500;

function move(direction: Direction): string {
  return "moving " + direction;
}

function statusText(code: HttpCode): string {
  if (code === 200) {
    return "ok";
  }
  if (code === 404) {
    return "missing";
  }
  return "error";
}

function literalTypes(): void {
  console.log(move("north"));
  console.log(statusText(200));
  console.log(statusText(404));
}

literalTypes();
