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

root.append(h1, fieldName, input, button);
button.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
    const text = input.value;
    const p = document.createElement('p');
    const content = document.createTextNode(text);
    p.append(content);
    createNewItem(event.target.parentElement, p);
}

function handleRemoveClick(event) {
    let rem = event.target.parentElement;
    console.log(rem);
    const children = root.children;
    console.log(children.length);
    let index=-1;
    for (let i = children.length - count; i < children.length; i++){
        if (children[i] === rem) {
            index = i;
            break;
        }
    }
    root.removeChild(children[index]);
}

function createNewItem(parentElement, p) {
    const itemBlock = document.createElement('container');
    const remove = document.createElement('button');
    remove.append(document.createTextNode('X'));
    remove.classList.add('margin');
    remove.addEventListener('click', handleRemoveClick);
    itemBlock.append(`${count++}. `, p, remove);
    itemBlock.classList.add('container');
    let elem = parentElement.append(itemBlock);
    input.value = '';
}