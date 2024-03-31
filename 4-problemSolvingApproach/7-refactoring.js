function charCount(str) {
  // make object to return at end
  let result = {};
  // Loop over string for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the character is number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      //if the char is a number/letter AND not in object, add it to object and set value to 1
      result[char] = 1;
    }
  }

  // if char is something else (space, period, etc) don't do anything
  // return obj at end
  return result;
}

console.log(charCount("Hi there"));
