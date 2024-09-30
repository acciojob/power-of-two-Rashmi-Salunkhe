const isPowerOfTwo = (number) => {
    // A number must be greater than 0 to be a power of 2
    // A power of 2 has only one bit set in its binary representation, so:
    // `number & (number - 1)` should be 0 for powers of 2
    return number > 0 && (number & (number - 1)) === 0;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
