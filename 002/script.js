"use strict"
function onload(){
    const form = document.querySelector('form');
    const ul = document.querySelector('ul');
    const button = document.querySelector('button');
    const input = document.getElementById('item');

    const liMaker = (text) => {
        const li = document.createElement('li')
        li.textContent = text
        ul.appendChild(li)
      }
}