const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
// function onSubmit(e)
// {
//     e.preventDefault();

//     if(nameInput.value === ''|| emailInput.value === '')
//     {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';

//         setTimeout(()=>msg.remove(),3000);
//     }
//     else{
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//         userList.appendChild(li);
//         //Clear fields
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }

// localStorage.setItem('name', 'Bob');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');

// sessionStorage.setItem('name', 'John');
// console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');

// document.cookie = 'name=Kyle; expires='+new Date(2024, 0, 1).toUTCString();
// console.log(document.cookie)

//Storing data into local storage
function onSubmit(e)
{
    e.preventDefault();

    if(nameInput.value === ''|| emailInput.value === '')
     {
         msg.classList.add('error');
         msg.innerHTML = 'Please enter all fields';

         setTimeout(()=>msg.remove(),3000);
     }
     else{
        
        localStorage.setItem(nameInput.value, emailInput.value);
        nameInput.value = '';
        emailInput.value = '';
     }
}