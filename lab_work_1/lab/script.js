// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// First task
function capitalize(strng) {
  const words = strng.toLowerCase().split(' ');
  const wordsCap = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return wordsCap.join(' ');
}
var cap = capitalize('the quick brown fox');
console.log(cap);

//Second task

const largestNumber = (int1, int2, int3) => {
  var largest = Math.max(int1, int2, int3);
  return largest;
};

console.log(largestNumber(1, 2, 3));
console.log(largestNumber(333, 2002, 3));

// Third task

const moveChars = word => {
  var slice = word.slice(-3);
  var leftslice = word.slice(0, -3);
  return slice + leftslice;
};

console.log(moveChars('Python'));

// Fourth task

const angleType = (angle) =>{
  switch (true) {
  case angle<90&&angle>0:
    return "acute"
    break;
  case angle===90:
    return "right"
    break;
  case angle>90 && angle<180:
    return "obtuse"
  case angle===180:
      return "straight"
  default:
    return "input valid angle"
    }
}
console.log(angleType(180))