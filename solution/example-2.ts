import computeAverageAge from "./compute-average-age";

const users = [
  {
    "name": "Hanna Arendt",
    "age": 57
  },
  {
    "name": "Harry Potter",
    "age": 19
  },
  {
    "name": "Henrike Edelweiß",
    "age": 22
  },
  {
    "name": "Helene Humboldt",
    "age": 79
  },
  {
    "name": "Heinz Hansen",
    "age": 65
  },
  {
    "name": "Hanniball Hinzen",
    "age": "16"
  },
  {
    "name": "Hubertus Heil",
    "age": 27
  },
  {
    "name": "Hans Zimmer",
    "age": 57
  },
  {
    "name": "Hasselhoff David",
    "age": 27
  },
  {
    "name": "Heinrich Hummer",
    "age": 29
  },
  {
    "name": "Henry Hu`Reñšon",
    "age": 6
  }
]

const averageAge = computeAverageAge(users);
console.log(averageAge);