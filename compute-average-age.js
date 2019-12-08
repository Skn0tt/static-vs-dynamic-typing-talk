function computeAverageAge(users) {
  let sumOfAges = 0;

  for (const user of users) {
    sumOfAges += user.age;
  }

  return sumOfAges / users.length;
}

module.exports = computeAverageAge;