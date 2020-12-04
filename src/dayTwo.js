const parse = (string) => string.split('\n');

const execute = (input) => {
  const data = parse(input);

  let validPasswords = 0;

  // PART ONE
  //   for (let i = 0; i < data.length; i++) {
  //     const currentEntry = data[i].split(' ');
  //     const frequency = currentEntry[0].split('-');
  //     const letter = currentEntry[1].charAt(0);
  //     const entry = currentEntry[2];
  //     const regex = new RegExp(`[^${letter}]`, 'g');
  //     const removeOtherLetters = entry.replace(regex, '');

  //     if (
  //       removeOtherLetters.length >= frequency[0] &&
  //       removeOtherLetters.length <= frequency[1]
  //     ) {
  //       validPasswords++;
  //     }
  //   }
  //   console.log(validPasswords);

  // PART TWO
  for (let i = 0; i < data.length; i++) {
    const currentEntry = data[i].split(' ');
    const frequency = currentEntry[0].split('-');

    const positionA = parseInt(frequency[0]) - 1;
    const positionB = parseInt(frequency[1]) - 1;

    const letter = currentEntry[1].charAt(0);

    const entry = currentEntry[2];

    const first = entry.charAt(positionA);

    const second = entry.charAt(positionB);

    if (
      (first === letter && second !== letter) ||
      (first !== letter && second === letter)
    ) {
      validPasswords++;
    }
  }
  console.log(validPasswords);
};

module.exports = execute;
