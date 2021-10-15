const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);


function addTodo(event){
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Ceck Mark
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed-btn");
    todoDiv.appendChild(completedBtn);
    //Ceck Mark
    const DeleteBtn = document.createElement("button");
    DeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    DeleteBtn.classList.add("Delete-btn");
    todoDiv.appendChild(DeleteBtn);
    //Append to list
    todoList.appendChild(todoDiv);
}


todoList.addEventListener("click", deleteCheck);

function deleteCheck(e){
    const item = e.target;
    //Delete TODO
    if(item.classList[0] === "Delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}