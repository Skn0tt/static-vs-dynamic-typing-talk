type User = {
  name: string;
  age: number;
}

export default function computeAverageAge(users: User[]): number {
  let sumOfAges = 0;

  for (const user of users) {
    sumOfAges += user.age;
  }

  return sumOfAges / users.length;
}