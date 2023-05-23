// Define html elements and assign them to a variable
let todoContainer = document.getElementById("todo-container");
let htmlForm = document.getElementById("todo-form");
let inputBox = document.getElementById("todo-input");

htmlForm.addEventListener("submit", function(event){
    // Prevent page refresh on click
    event.preventDefault();

    let inputElement = document.getElementById("todo-input");
        if (inputElement.value !== "") {
            // Create list item and div for the text
            let listItem = document.createElement("li");
            let divText  = document.createElement("div");

            listItem.style.display = "item-list";
            listItem.style.marginTop = "10px";

            // Apply CSS Style to listItems
            divText.style.fontSize = "16px";
            divText.style.display = "inline-block";
            divText.style.marginBottom = "10px";
            listItem.appendChild(divText);

            // Retrieve input value
            let inputValue = inputElement.value;
            console.log(inputValue);

            // Display input value in the divText
            divText.textContent = inputValue;

            // Create div for the buttons
            let divButton = document.createElement("div");
            listItem.appendChild(divButton)

            // Create a button for editing
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
            buttonEdit.style.boxShadow = "black 0px 0px 1px"
            
            buttonEdit.style.cursor = "pointer";

            // Append the buttonEdit to the list item
            listItem.appendChild(buttonEdit);

            // Create a button for deleting
            let buttonDelete = document.createElement("button");

            // Add text to the button
            buttonDelete.textContent = "Delete"

            // Apply CSS styles
            buttonDelete.style.backgroundColor = "red";
            buttonDelete.style.color = "black";

            buttonDelete.style.padding = "10px 20px";

            buttonDelete.style.border = "none";
            buttonDelete.style.borderRadius = "5px";
            buttonDelete.style.boxShadow = "black 0px 0px 1px"

            buttonDelete.style.cursor = "pointer";

            // Append the buttonDelete to the list item
            listItem.appendChild(buttonDelete);

            // Append the listItem to the todoContainer
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