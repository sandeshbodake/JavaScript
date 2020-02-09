// function calculateBill() {
//   return 5 + 9;
// }


// annoymous fucction
// javascript hoist all functions and then run

// console.log(doctrize2('Arya Stark'));
//
const doctrize = function(firstName){
  return `Dr. ${firstName}`
}

function doctrize2(firstName){
  return `Dr. ${firstName}`
}

// arrow function

const inchToCm = (inch) => inch * 2.5;

const addNumber = (a, b) => a + b;

const makebaby = (name, age) => ({ name: name, age: age });

// IIFE

(function() {
  console.log('coming here first')
}());


const student = {
  name: 'arya',

  kings_landing(){
    console.log('shame shame');
    return 'cersi'
  }
}

// callbacks

const button = document.querySelector('.click-me');
button.addEventListener('click', function(){
  console.log('hey sandesh ypu click me');
})


setTimeout(student.kings_landing, 500)
