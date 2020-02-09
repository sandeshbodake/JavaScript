const person = [

  {name: 'arya', house: 'stark'},
  {name: 'jon', house: 'targeriyan'},
  {name: 'dany', house: 'targeriyan'}
]

person.forEach((person, index) => {
  // debugger;
  console.table(person) // i like this one
  // console.error(index);
});

// intresting
function groupFuction(name){
  console.group(`group starts here`);
  console.log('coming under log');
  console.warn('warning here');
  console.groupEnd(`ends here`);
}

// function calculateBill() {
//   return 5 + 9;
// }

// Grabbing input use $0, $1 ....

// annoymous fucction
// javascript hoist all functions and then run

// console.log(doctrize2('Arya Stark'));
//
const doctrize = function(firstName){
  return `Dr. ${firstName}`
}

function doctrize2(firstName){
  console.count(`running doctorize for ${firstName}`)
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
