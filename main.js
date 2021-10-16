const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

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
    //Check Mark
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed-btn");
    todoDiv.appendChild(completedBtn);
    //Delete Mark
    const DeleteBtn = document.createElement("button");
    DeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    DeleteBtn.classList.add("Delete-btn");
    todoDiv.appendChild(DeleteBtn);
    //Append to list
    todoList.appendChild(todoDiv);
}

// Delete Complete Check
todoList.addEventListener("click", deleteCheck);

function deleteCheck(e){
    const item = e.target;
    //Delete TODO
    if(item.classList[0] === "Delete-btn"){
        const todo = item.parentElement;
        // todo.remove();
        //Delete Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    if (item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// Filtering
filterOption.addEventListener("click", filterTodo);

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todos){
        switch(e.target.value){
            case "all":
                todos.style.display = "flex";
            break;
            case "completed":
                if(todos.classList.contains("completed")){
                    todos.style.display = "flex";
                }
                else {
                    todos.style.display = "none";
                }
            break;
            case "uncompleted":
                if(!todos.classList.contains("completed")){
                    todos.style.display = "flex";
                }
                else{
                    todos.style.display = "none";
                }
            break;
        }
    });
}


