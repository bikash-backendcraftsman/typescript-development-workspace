interface Task {
  id: number;
  title: string;
  done: boolean;
}

function interfaceBasics(): void {
  const task: Task = {
    id: 1,
    title: "Read interfaces",
    done: false,
  };

  task.done = true;
  console.log(task.id, task.title, task.done);
}

interfaceBasics();
