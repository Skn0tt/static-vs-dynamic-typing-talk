const computeAverageAge = require("./compute-average-age");

const users = [
  {
    "name": "Hans Humboldt",
    "age": 57
  },
  {
    "name": "Hasso Plattner",
    "age": 76
  },
  {
    "name": "Henriette Schneider",
    "age": 22
  }
]

const averageAge = computeAverageAge(users);
console.log(averageAge);