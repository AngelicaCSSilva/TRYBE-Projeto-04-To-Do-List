let newToDo = '';
const listOl = document.querySelector('#lista-tarefas');

// Adiciona tarefa na lista.
function addToDoItem(text) {
  const newItem = document.createElement('li');
  newItem.innerText = text;
  listOl.appendChild(newItem);
}

// Captura texto inserido no input.
function getToDo() {
  const getText = document.querySelector('#texto-tarefa');
  newToDo = getText.value;

  getText.value = '';

  addToDoItem(newToDo);
}

// Adiciona função ao botão de criar nova tarefa.
function buttonAddToDo() {
  const buttonAdd = document.querySelector('#criar-tarefa');
  buttonAdd.addEventListener('click', getToDo);
}

// Remove a classe 'selected' caso tenha alguma tarefa selecionada.
function removeSelected() {
  const selected = document.querySelector('.selected');
  if (selected != null) {
    selected.classList.remove('selected');
  }
}

// Adiciona a classe 'selected' (cor cinza) quando se clica em uma tarefa.
function changeGrey(event) {
  removeSelected();
  const item = event.target;
  item.classList.add('selected');
}

// Risca e tira o risco da tarefa.
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

// Adiciona a função ao clicar na tarefa, para que ela seja selecionada (cor cinza).
function listToGrey() {
  const ordenedList = document.querySelector('ol');
  ordenedList.addEventListener('click', changeGrey);
}

// Adiciona a função de riscar/tirar o risco da tarefa com duplo clique.
function crossOffList() {
  const ordenedList = document.querySelector('ol');
  ordenedList.addEventListener('dblclick', crossOff);
}

// Apaga todas as tarefas.
function clearAll() {
  const list = document.querySelector('ol');
  for (let index = (list.children.length - 1); index >= 0; index -= 1) {
    list.children[index].remove();
  }
}

// Adiciona a função de apagar tudo ao botão.
function btnClearAll() {
  const btnClear = document.querySelector('#apaga-tudo');
  btnClear.addEventListener('click', clearAll);
}

// Apaga todas as tarefas marcadas como terminadas (completed).
function clearFinished() {
  const listFinished = document.querySelectorAll('.completed');
  for (let index = (listFinished.length - 1); index >= 0; index -= 1) {
    listFinished[index].remove();
  }
}

// Adiciona a função de apagar as tarefas terminadas ao botão.
function btnClearFinished() {
  const btnCFinished = document.querySelector('#remover-finalizados');
  btnCFinished.addEventListener('click', clearFinished);
}

// Salva todas as tarefas.
function saveAll() {
  const saveList = listOl.innerHTML;
  localStorage.setItem('toDos', JSON.stringify(saveList));
}

// Adiciona a função de salvar as tarefas ao botão.
function btnSaveAll() {
  const btnSave = document.querySelector('#salvar-tarefas');
  btnSave.addEventListener('click', saveAll);
}

// Carrega, se houver, a lista salva.
function loadPrevious() {
  const toDos = localStorage.getItem('toDos');
  if (toDos) {
    listOl.innerHTML = JSON.parse(toDos);
  }
}

// Apaga todas as tarefas marcadas como terminadas (completed).
function clearSelected() {
  const getSelected = document.querySelector('.selected');
  getSelected.remove();
}

// Adiciona a função de apagar as tarefas terminadas ao botão.
function btnClearSelected() {
  const btnCFinished = document.querySelector('#remover-selecionado');
  btnCFinished.addEventListener('click', clearSelected);
}

btnClearSelected();
loadPrevious();
btnSaveAll();
btnClearFinished();
btnClearAll();
crossOffList();
buttonAddToDo();
listToGrey();
