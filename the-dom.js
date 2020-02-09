const p = document.querySelector('p');
//document.querySelectorAll('p');

// set text property
console.log(p.textContent);
p.textContent = 'sandy is cool';
console.log(p.textContent);
p.innerText = 'wes is cool';
console.log(p.textContent);

// innerHtml outerHtml

// insertAdjacentText(pos, text)
// pos = afterBegin, beforeEnd

// const p = document.querySelector('p');

// p.classList.add('p2')

// contains for check whther class is present or not

// className to check class name

// p.setAttribute(attr_name, content)
// p.getAttribute(attr_name)

const custom = document.querySelector('.dom-img');

console.log(custom.dataset);

custom.addEventListener('click', function(){
  alert(`Welcome ${custom.dataset.name}`);
});



const myDiv = document.createElement('div');
myDiv.textContent = 'This is div';
myDiv.classList.add('my-div');


document.body.appendChild(myDiv);


// insertAdjacentElement(pos, element)
element = document.createElement('p')
element.innerText = 'sandesh';

ul = document.querySelector('.test-ul');
// ul.insertAdjacentElement('beforeBegin', element)
// ul.insertAdjacentElement('afterBegin', element)
// ul.insertAdjacentElement('beforeEnd', element)
ul.insertAdjacentElement('afterEnd', element)


// element.cloneNode(true)

// document.createRange().createContextualFragment(string_html) will converts string to html
