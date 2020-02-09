const btn = document.querySelector('.my-button');

btn.addEventListener('click', function(){
  console.log('im stark');
});

function handleEvent(e){
  console.log('winter is coming...');
  e.stopPropagation(); // stop event bubbling
}
// removeEvetListener use for stop listing

const btns = document.querySelectorAll('.got');

btns.forEach(function(btn){
  btn.addEventListener('click', handleEvent);
})

window.addEventListener('click', function(){
  console.log('click on window');
}, { capture: true })


submit = document.querySelector('.submit-form');

submit.addEventListener('click', function(e){
  e.preventDefault();

  console.log(e.currentTarget);
})
