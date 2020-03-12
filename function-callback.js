const array1 = [231, 230, 239, 229, 10, 13];
console.log(array1.every(currentValue => currentValue < 40));

// every check all array1 elements and return trur/false
// some check atleast one element statisfied condition and return true/false

console.log(array1.sort((num1, num2) => num1 - num2))


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
