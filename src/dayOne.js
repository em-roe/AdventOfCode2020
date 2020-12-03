const execute = (input) => {
  const expenses = parse(input);

  currentTotal = 0;
  i = 0;

  //   for two numbers that sum to 2020
  //   while (i < expenses.length && currentTotal !== 2020) {
  //     const current = expenses[i];
  //     expenses.forEach((number) => {
  //       if (current + number === 2020 && current != number) {
  //         currentTotal = current + number;
  //         console.log(current * number);
  //       }
  //     });
  //     i++;
  //   }

  //new approach
  //   while (i < expenses.length && currentTotal !== 2020) {
  //     const current = expenses[i];
  //     const secondNumber = 2020 - current;
  //     if (expenses.includes(secondNumber)) {
  //       console.log(current, secondNumber);
  //       console.log(current * secondNumber);
  //     }
  //     i++;
  //   }

  //for three numbers that sum to 2020
  while (i < expenses.length && currentTotal !== 2020) {
    const current = expenses[i];
    expenses.forEach((number) => {
      const thirdNumber = 2020 - current - number;
      if (expenses.includes(thirdNumber)) {
        console.log(thirdNumber);
        console.log(number, current, thirdNumber);
        console.log('product', number * current * thirdNumber);
      }
    });
    i++;
  }
};

const parse = (string) => string.split('\n').map((x) => parseInt(x, 10));

module.exports = execute;
