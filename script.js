let newToDo = '';

const listOl = document.querySelector('#lista-tarefas');

function addToDoItem(text) {
  const newItem = document.createElement('li');
  newItem.innerText = text;
  listOl.appendChild(newItem);
}

function getToDo() {
  const getText = document.querySelector('#texto-tarefa');
  newToDo = getText.value;

  getText.value = '';

  addToDoItem(newToDo);
}

function buttonAddToDo() {
  const buttonAdd = document.querySelector('#criar-tarefa');
  buttonAdd.addEventListener('click', getToDo);
}

function changeGrey(event) {
  const item = event.target;
  console.log(item);
  item.classList.add('selected');
}

function listToGrey() {
  const ordenedList = document.querySelector('ol');
  ordenedList.addEventListener('click', changeGrey);
}

buttonAddToDo();
listToGrey();
