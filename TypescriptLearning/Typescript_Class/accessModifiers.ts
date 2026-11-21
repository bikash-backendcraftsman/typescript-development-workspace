class Account {
  readonly id: number;
  public owner: string;
  private balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): number {
    this.balance = this.balance + amount;
    return this.balance;
  }
}

function accessModifiers(): void {
  const account = new Account(1, "Bikash", 100);
  console.log(account.id, account.owner, account.deposit(25));
}

accessModifiers();
