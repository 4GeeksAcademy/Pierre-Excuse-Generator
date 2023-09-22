/* eslint-disable */
import 'bootstrap';
import './style.css';

import './assets/img/rigo-baby.jpg';
import './assets/img/4geeks.ico';

let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];

let action = ['ate', 'peed', 'crushed', 'broke'];

let what = ['my homework', 'the keys', 'the car'];

let when = [
  'before the class',
  'right on time',
  'when I finished',
  'during my lunch',
  'while I was praying',
];

const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const excuse = document.querySelector('.excuse');

console.log(randomElement(who));

window.onload = function() {
  //write your code here
  excuse.innerHTML = `${randomElement(who)} ${randomElement(
    action
  )} ${randomElement(what)} ${randomElement(when)}`;
};
