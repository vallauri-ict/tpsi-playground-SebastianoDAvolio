const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

let itemsArray = [];

//localStorage.setItem('items', JSON.stringify(itemsArray)); NON RIPRISTINARE QUESTO E' ROTTO
const data = JSON.parse(localStorage.getItem('items'));

console.log(data);
const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))

    liMaker(input.value);
    input.value = '';
    e.preventDefault()
  })
