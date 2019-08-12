//const todo_div = document.getElementById("app");

const todo_form = document.createElement("Form");
document.body.appendChild(todo_form);

const todo_div = document.createElement("div");
todo_div.id = "todo";

const listbutton = document.createElement("button");
listbutton.innerText = "Submit";
todo_form.appendChild(listbutton);

const my_input = document.createElement("input");
todo_form.appendChild(my_input);
const todo = document.createElement("h2");
todo.innerText = "TODO";
todo_form.appendChild(todo);

//
const comp_div = document.createElement("div");
todo_div.id = "completed";
const complete = document.createElement("h2");
complete.innerText = "Completed";
comp_div.appendChild(complete);
todo_form.appendChild(comp_div);
//

todo_form.addEventListener("submit", event => {
  event.preventDefault();

  const inputValue = my_input.value;
  const todo_list = document.createElement("LI");
  const completed = document.createElement("LI");
  todo_list.innerText = inputValue;

  todo_list.onclick = function() {
    // todo_list.parentNode.removeChild(todo_list);
    completed.parentNode.appendChild(todo_list);

    // todo_list.parentNode.removeChild(todo_list);
  };

  todo_div.appendChild(todo_list);
  document.body.appendChild(todo_div);
  comp_div.appendChild(completed);
  document.body.appendChild(comp_div);
});

/*const complete = document.createElement("h2");
todo.innerText = "Completed";
todo_form.appendChild(complete);
*/
