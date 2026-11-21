interface Person {
  name: string;
}

interface Student extends Person {
  course: string;
  year: number;
}

function extendingInterfaces(): void {
  const student: Student = {
    name: "Bikash",
    course: "TypeScript",
    year: 2026,
  };

  console.log(student.name, student.course, student.year);
}

extendingInterfaces();
