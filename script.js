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

function removeSelected() {
  const selected = document.querySelector('.selected');
  if (selected != null) {
    selected.classList.remove('selected');
  }
}

function changeGrey(event) {
  removeSelected();
  const item = event.target;
  item.classList.add('selected');
}

function crossOff(event) {
  const item = event.target;
  const itemClassList = item.classList;
  const completed = 'completed';
  if (itemClassList.contains(completed)) {
    itemClassList.remove(completed);
  } else {
    itemClassList.add(completed);
  }
}

function listToGrey() {
  const ordenedList = document.querySelector('ol');
  ordenedList.addEventListener('click', changeGrey);
}

function crossOffList() {
  const ordenedList = document.querySelector('ol');
  ordenedList.addEventListener('dblclick', crossOff);
}

crossOffList();
buttonAddToDo();
listToGrey();
