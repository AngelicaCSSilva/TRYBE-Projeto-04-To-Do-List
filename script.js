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
  /*   if (itemClassList.contains(completed)) {
    itemClassList.remove(completed);
  } else {
    itemClassList.add(completed);
  } */
  // ref.: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
  itemClassList.toggle('completed');
}

function listToGrey() {
  const ordenedList = document.querySelector('ol');
  ordenedList.addEventListener('click', changeGrey);
}

function crossOffList() {
  const ordenedList = document.querySelector('ol');
  ordenedList.addEventListener('dblclick', crossOff);
}
function clearAll() {
  const list = document.querySelector('ol');
  for (let index = (list.children.length - 1); index >= 0; index -= 1) {
    list.children[index].remove();
  }
}

function btnClearAll() {
  const btnClear = document.querySelector('#apaga-tudo');
  btnClear.addEventListener('click', clearAll);
}

function clearFinished() {
  const listFinished = document.querySelectorAll('.completed');
  for (let index = (listFinished.length - 1); index >= 0; index -= 1) {
    listFinished[index].remove();
  }
}

function btnClearFinished() {
  const btnCFinished = document.querySelector('#remover-finalizados');
  btnCFinished.addEventListener('click', clearFinished);
}

btnClearFinished();
btnClearAll();
crossOffList();
buttonAddToDo();
listToGrey();
