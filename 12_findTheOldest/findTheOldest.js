const findTheOldest = (arr) => {
    const person = arr.reduce((acc, item) => {
      let age;
      if (item.yearOfDeath === undefined) {
        const actualYear = new Date().getFullYear();
        age = actualYear - item.yearOfBirth;
      } else {
        age = item.yearOfDeath - item.yearOfBirth;
      }
  
      let previousAge;
      if (acc.yearOfDeath === undefined) {
        const actualYear = new Date().getFullYear();
        previousAge = actualYear - acc.yearOfBirth;
      } else {
        previousAge = acc.yearOfDeath - acc.yearOfBirth;
      }
  
      if (age > previousAge) {
        return item;
      }
      return acc;
    }, arr[0]);
    return person;
  }

// Do not edit below this line
module.exports = findTheOldest;
