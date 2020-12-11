document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded')
    //Grab the form
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);
})

// Functions

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    //grabs the list
    const christmasListItem = createChristmasListItem(event.target);
    const christmasList = document.querySelector('#christmas-list');
    christmasList.appendChild(christmasListItem);

    event.target.reset();
}


// creates the list
const createChristmasListItem = function (form) {
    const christmasListItem = document.createElement('li');
    christmasListItem.classList.add('christmas-list-item');

    const todo = document.createElement('h1');
    todo.textContent = form.todo.value;
    christmasListItem.appendChild(todo);
    console.log('To-do has been created!');

    const forlist = document.createElement('h2');
    forlist.textContent = form.forlist.value;
    christmasListItem.appendChild(forlist);
    console.log('for has been created!')

    const list = document.createElement('h3');
    list.textContent = form.list.value;
    christmasListItem.appendChild(list);
    console.log('list has been created!')


    return christmasListItem;
}

