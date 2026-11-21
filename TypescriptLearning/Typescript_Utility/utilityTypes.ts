type Lesson = {
  title: string;
  minutes: number;
  published: boolean;
};

function utilityTypes(): void {
  const draft: Partial<Lesson> = { title: "Utility types" };
  const summary: Pick<Lesson, "title" | "minutes"> = {
    title: "Unions",
    minutes: 20,
  };
  const hidden: Omit<Lesson, "published"> = {
    title: "Classes",
    minutes: 30,
  };
  const catalog: Record<string, number> = {
    types: 1,
    generics: 2,
  };

  console.log(draft.title);
  console.log(summary.title, summary.minutes);
  console.log(hidden.title, hidden.minutes);
  console.log(catalog.types, catalog.generics);
}

utilityTypes();
