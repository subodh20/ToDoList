//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//event listeners
todoButton.addEventListener("click", addTodo);
//Function
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //todo li
  const newTodo = document.createElement("li");
  newTodo.innerHTML = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // check mark btn
  const completedButton = document.createElement("button");
  completedButton.innerText = "ss";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // check trash btn
  const trashButton = document.createElement("button");
  trashButton.innerText = "tt";
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);
}
