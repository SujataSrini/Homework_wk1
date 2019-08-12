import { constants } from "fs";

const todo_div = document.getElementById("app");

const todo_form = document.createElement("Form");
document.body.appendChild(todo_form);
const listbutton = document.createElement("button");
listbutton.innerText = "Submit";
todo_form.appendChild(listbutton);
const my_input = document.createElement("input");
todo_form.appendChild(my_input);

todo_form.addEventListener("submit", event => {
  event.preventDefault();
  const inputValue = my_input.value;
  const todo_list = document.createElement("LI");
  todo_list.innerText = inputValue;
  todo_list.onclick = function() {
    todo_list.parentNode.removeChild(todo_list);
  };

  document.body.appendChild(todo_list);
});
