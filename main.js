// 6kyu
// KATA 1 //
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
//code a=65 z=122
function alphabetPosition(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += (code - 64) + ' ';
  }
  return result.slice(0, result.length-1);
}

console.log(alphabetPosition('The sunset'));

// KATA 2 
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}

console.log(persistence(39))

// KATA 3
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
const toCamelCase = str => {
  return str.replace(/[-_]\w/gi, match => match.charAt(1).toUpperCase());
}

console.log(toCamelCase(''))
console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))

// KATA 4
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
const narcissistic = value => {
  let arr = value.toString().split('');
  let result = arr.map(num => {
    return Math.pow(num, arr.length);
  })
  return result.reduce((ttl,cv) => ttl + cv) === value; 
}

console.log(narcissistic(7));
console.log(narcissistic(153));
console.log(narcissistic(122));

// KATA 5
// https://www.codewars.com/kata/54e6533c92449cc251001667
const uniqueInOrder = iterable => [...iterable].filter((el,i) => el !== iterable[i - 1]);

console.log(uniqueInOrder([1,2,2,3,3]));