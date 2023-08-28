const myForm = document.querySelector('#addForm');
const expenseAmountInput = document.querySelector('#expenseAmount');
const descriptionInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category');
myForm.addEventListener('submit', onSubmit);



function onSubmit(e)
{
    e.preventDefault();

    if(expenseAmountInput.value === ''|| descriptionInput.value === '' || categoryInput.value === '')
     {
         msg.classList.add('error');
         msg.innerHTML = 'Please enter all fields';

         setTimeout(()=>msg.remove(),3000);
     }
     else{
        
        let myObj = {
            Expense : expenseAmountInput.value,
            Description : descriptionInput.value,
            Category : categoryInput.value
        };
    
     
        let myObj_serialized = JSON.stringify(myObj);
        localStorage.setItem(descriptionInput.value, myObj_serialized);
        expenseAmountInput.value = '';
        descriptionInput.value = '';
        categoryInput.value = '';
     }
}