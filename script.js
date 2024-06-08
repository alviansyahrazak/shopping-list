var userInput = document.getElementById("userInput");
var enterButton = document.getElementById("enterButton");
var myLists = document.getElementById("myLists");
var list = document.getElementById("list");
var deleteButton = document.getElementById("deleteButton");

// function to create a list and delete button in ul/mylists #id, there is also a delete function call so you can delete a list that has been added;
function createList(event) {
  if (
    userInput.value !== "" &&
    (event.key === "Enter" || event.type === "click")
  ) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    li.setAttribute("id", "list");
    myLists.appendChild(li);
    userInput.value = "";

    var button = document.createElement("button");
    button.setAttribute("id", "deleteButton");
    li.appendChild(button);
    button.textContent = "Delete";
  }
  addButtonsEvent();
}

//creates a list line if the text is clicked
function doneLine(event) {
  var lists = document.querySelectorAll("#list");
  for (var i = 0; i < lists.length; i++) {
    if (lists[i] === event.target) {
      lists[i].classList.toggle("done");
    }
  }
}

//function to delete the list using event.target.parentNode
function deleteMyList(event) {
  deleteItem = event.target.parentNode;
  deleteItem.remove();
}

//provides an event for each deleteButton to delete the list by calling deleteMyList
function addButtonsEvent() {
  var deleteButtons = document.querySelectorAll("#deleteButton");
  for (i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteMyList);
  }
}

addButtonsEvent();

userInput.addEventListener("keydown", createList);
enterButton.addEventListener("click", createList);
myLists.addEventListener("click", doneLine);
