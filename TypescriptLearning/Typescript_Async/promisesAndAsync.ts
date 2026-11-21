function delay(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("waited " + ms + "ms"), ms);
  });
}

async function promisesAndAsync(): Promise<void> {
  const result = await delay(10);
  console.log(result);
}

promisesAndAsync();
