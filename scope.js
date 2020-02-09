const name1 = 'sansa' // not attached with window
let name2 = 'rob' // not attached with window
var name3 = 'arya' // attached with window.name3

// except let, const all are attached to window
function isCool(name){
  // let flag = false;

  if(name == 'sandy'){
    let flag = true;
    console.log(flag);
  }

  console.log(flag);
  return flag;
}

sayHi();

console.log(age);

var age = 10;
// in js methods are hoist and variable names are declred nut not a value

function sayHi(){
  console.log('methods are hoisting')
}
