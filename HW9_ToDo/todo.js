const root = document.getElementById('root');
let count = 1;

// Header
const h1 = document.createElement('h1');
const h1Header = document.createTextNode('To Do');
h1.append(h1Header);
h1.classList.add('text');

//Field header
const fieldName = document.createElement('p');
const fieldNameText = document.createTextNode('Add new item: ');
fieldName.append(fieldNameText);
fieldName.classList.add('p');

//Field
const input = document.createElement('input');
input.setAttribute('type', 'text');

//Button
const button = document.createElement('button');
const buttonText = document.createTextNode('Add new item');
button.append(buttonText);
button.classList.add('margin');

//Tasks
const ol = document.createElement('ol');

root.append(h1, fieldName, input, button, ol);
button.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
    const text = input.value;
    const li = document.createElement('li');
    const remove = document.createElement('button');
    remove.append(document.createTextNode('X'));
    remove.classList.add('margin');
    remove.addEventListener('click', handleRemoveClick);
    li.append(text, remove);
    ol.append(li);
    event.target.parentElement.append(ol);
    input.value = '';
}

function handleRemoveClick(event) {
    ol.removeChild(event.target.parentElement);
}
