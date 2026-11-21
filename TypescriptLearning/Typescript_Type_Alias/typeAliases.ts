type UserId = number;
type Email = string;

type User = {
  id: UserId;
  email: Email;
  active: boolean;
};

function typeAliases(): void {
  const user: User = {
    id: 7,
    email: "bikash.backendcraftsman@gmail.com",
    active: true,
  };

  console.log(user.id, user.email, user.active);
}

typeAliases();
