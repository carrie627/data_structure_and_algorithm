function validAnagram2(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists increment otherwise set it to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not anagram
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }
  return true;
}

console.log(validAnagram2("anagram", "nagaram"));
