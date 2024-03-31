function hash(key, arrayLen) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }

    return total;
}

hash("hello", 13);
hash("goodbye", 13);
hash("hi", 13);
hash("cyan", 13);
hash("pink", 13);
