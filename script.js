// Define html elements and assign them to a variable
let todoContainer = document.getElementById("todo-container");
let htmlForm = document.getElementById("todo-form");
let inputBox = document.getElementById("todo-input");

/*
1: Select the form element.
2: Add an event listener to the form that listens for "submit" events.
3: When the form is submitted, prevent the default behavior.
4: Select the input element.
5: Get the value of the input element.
7: Check if the value is not empty.
If the value is not empty: 
    a. Create a new list item element. 
    b. Create a new div element for the text. 
    c. Create a new div element for the buttons. 
    d. Create a new button element for editing. 
    e. Create a new button element for deletion. 
    f. Append the text div and button div to the list item element. 
    g. Append the list item element to the todo list container.
*/

htmlForm.addEventListener("submit", function(event){
    // prevent page refresh on click
    event.preventDefault();

    let inputElement = document.getElementById("todo-input");
        if (inputElement.value !== "") {
            // create list item and div for the text
            let listItem = document.createElement("li");
            let divText  = document.createElement("div");
            listItem.appendChild(divText);

            // retrieve input value
            let inputValue = inputElement.value;
            console.log(inputValue);

            // create div for the buttons
            let divButton = document.createElement("div");
            listItem.appendChild(divButton)

            let buttonEdit = document.createElement("button");

            // Add text to the button
            buttonEdit.textContent = "Edit"
            // Apply CSS styles
            buttonEdit.style.backgroundColor = "yellow";
            buttonEdit.style.color = "black";
            buttonEdit.style.marginRight = "5px";
            buttonEdit.style.padding = "10px 30px";
            buttonEdit.style.border = "none";
            buttonEdit.style.borderRadius = "5px";
            buttonEdit.style.cursor = "pointer";
            buttonEdit.style.boxShadow = "black 0px 0px 1px"

            // Append the button to the list item
            listItem.appendChild(buttonEdit);

            let buttonDelete = document.createElement("button");
            // Add text to the button
            buttonDelete.textContent = "Delete"
            // Apply CSS styles
            buttonDelete.style.backgroundColor = "red";
            buttonDelete.style.color = "black";
            buttonDelete.style.padding = "10px 20px";
            buttonDelete.style.border = "none";
            buttonDelete.style.borderRadius = "5px";
            buttonDelete.style.cursor = "pointer";
            buttonDelete.style.boxShadow = "black 0px 0px 1px"
            listItem.appendChild(buttonDelete);

            todoContainer.appendChild(listItem);
        }
});

/* 
3.  Set up an event listener for clicking a to-do item's button
    - If the clicked button is the delete button:
        - Remove the associated list item from the to-do list
    - If the clicked button is the edit button:
        - Replace the text div with an input box containing the current text
        - Replace the edit button with a save button
*/

/*
4.  Set up an event listener for clicking a to-do item's save button
      - Replace the input box with a div containing the input box's value
      - Replace the save button with an edit button
*/

/*
(Note: As of now, this list would not persist if the webpage were to be refreshed. To keep the list, you would need to add a storage feature, such as using localStorage, a database, or a backend service.)
*/