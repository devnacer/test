const btnAdd = document.querySelector(".fa-plus");
const inputTodo = document.getElementById("input-todo");

function addTodoItem() {
  // Création de la div
  //   const todoItem = document.createElement("div");
  //   todoItem.classList.add("todo-item");

  // Création du paragraphe
  const todo = document.createElement("p");
  todo.classList.add("todo");
  todo.innerText = inputTodo.value;
  //   todoItem.appendChild(todo);

  // Création de l'icône
  //   const btnDelete = document.createElement("i");
  //   btnDelete.classList.add("fa-solid", "fa-trash");
  //   todoItem.appendChild(btnDelete);

  //   console.log("haha");
  //
}

btnAdd.addEventListener("click", addTodoItem);
