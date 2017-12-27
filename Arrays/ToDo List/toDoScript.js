var todos = [];
var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        newTodo()
    } else if (input === "delete") {
        deletTodo()
    }
    input = prompt("What would you like to do?");
}


function listTodos() {
    todos.forEach(function (todo, i) {
        console.log("**********");
        console.log(i + 1 + ": " + todo);
        console.log("**********");
    });
}

function newTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
}

function deletTodo() {
    var index = prompt("Enter index of item to delete");
    index--;
    todos.splice(index, 1);
    console.log("Deleted Todo")
}