import {database} from './Firebase.js';
import { ref, push, set } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js';

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

function validateForm(name, email, message) {
     if (!name || !email || !message) {
          alert('Please fill out all fields.');
          return false;
     }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
     if(!emailRegex.test(email)) {
          alert('please enter a valid email address.');
          return false;
     }

     return true;

     form.addEventListener('submit', (e) => {
          e.preventDefault();

          const name = nameInput.value.trim();
          const email = emailInput.value.trim();
          const message = messageInput.value.trim();

          if (validateForm(name, email, message)) {
               const messageRef = ref(database, 'messages');
               const newMessageRef = push(messageRef);

               set(newMessageRef, {
                    name,
                    email,
                    message,
                    timestamp: Date.now()
               })
               .then(() => {
                    alert('Message sent successfully!');
                    form.reset();
               })
               .catch((error) => {
                    console.error('Error sending message:', error.message);
               });
          }
     })
}

