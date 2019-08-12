//Since you can't add elements to the index.html file by
// simply adding them directly to index.html,
// maybe start by using JavaScript to grab the div with an id of "app"?
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
  const unorderedlist = document.createElement("LI");
  unorderedlist.innerText = inputValue;
  document.body.appendChild(unorderedlist);
});
