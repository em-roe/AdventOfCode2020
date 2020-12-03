const parse = (string) => string.split('\n');

const execute = (input) => {
  const data = parse(input);

  let validPasswords = 0;

  for (let i = 0; i < data.length; i++) {
    const currentEntry = data[i].split(' ');
    const frequency = currentEntry[0].split('-');
    const letter = currentEntry[1].charAt(0);
    const entry = currentEntry[2];
    const regex = new RegExp(`[^${letter}]`, 'g');
    const removeOtherLetters = entry.replace(regex, '');

    if (
      removeOtherLetters.length >= frequency[0] &&
      removeOtherLetters.length <= frequency[1]
    ) {
      validPasswords++;
    }
  }
  console.log(validPasswords);
};

module.exports = execute;
