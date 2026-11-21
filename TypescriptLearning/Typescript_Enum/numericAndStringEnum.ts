enum Level {
  Beginner,
  Intermediate,
  Advanced,
}

enum Topic {
  Types = "types",
  Classes = "classes",
  Generics = "generics",
}

function numericAndStringEnum(): void {
  console.log(Level.Beginner, Level.Advanced);
  console.log(Topic.Types, Topic.Generics);
}

numericAndStringEnum();
