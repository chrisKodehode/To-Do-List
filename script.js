// Define html elements and assign them to a variable
let todoContainer = document.getElementById("todo-container");
let htmlForm = document.getElementById("todo-form");
let inputBox = document.getElementById("todo-input");
let buttonEdit = document.createElement("button");
let buttonDelete = document.createElement("button");
let divText  = document.createElement("div");

htmlForm.addEventListener("submit", function(event){
    // Prevent page refresh on click
    event.preventDefault();

    let inputElement = inputBox;
        if (inputElement.value !== "") {
            // Create list item and div for the text
            listItem = document.createElement("li");
            divText  = document.createElement("div");

            listItem.style.display = "item-list";
            listItem.style.marginTop = "10px";

            // Apply CSS Style to listItems
            divText.style.fontSize = "16px";
            divText.style.display = "inline-block";
            divText.style.marginBottom = "10px";
            listItem.appendChild(divText);

            // Retrieve input value
            let inputValue = inputElement.value;

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

            // Create a button for saving
            let buttonSave = document.createElement("button");

            // Add text to the button
            buttonSave.textContent = "Save";

            // Apply CSS styles
            buttonSave.style.backgroundColor = "#33ff00";
            buttonSave.style.color = "white";
            buttonSave.style.marginRight = "5px";
            buttonSave.style.padding = "10px 30px";
            buttonSave.style.border = "none";
            buttonSave.style.borderRadius = "5px";
            buttonSave.style.boxShadow = "black 0px 0px 1px";
            buttonSave.style.cursor = "pointer";
            buttonSave.style.display = "none";

            // Append the buttonSave to the list item
            listItem.appendChild(buttonSave);

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

            // If delete button is clicked, remove the list item
            buttonDelete.addEventListener("click", function(event){
                if (event.target === buttonDelete) {
                    listItem.remove();
                }
            })

            // If edit button is clicked, replace text
            buttonEdit.addEventListener("click", function(event){
                if (event.target === buttonEdit) {
                    // Replace the text with editable input field
                    let editInput = document.createElement("input");
                    editInput.type = "text";
                    editInput.value = divText.textContent;
                    divText.innerHTML = '';
                    divText.appendChild(editInput);

                    // Show the save button and hide the edit button
                    buttonEdit.style.display = "none";
                    buttonSave.style.display = "inline-block";

                    // Focus the input field
                    editInput.focus();

                    // Add a blur event listener to save the edited text
                    editInput.addEventListener("blur", function () {
                    // Update the divText with the edited value
                    divText.textContent = editInput.value;
                
                    // Hide the save button and show the edit button
                    buttonEdit.style.display = "inline-block";
                    buttonSave.style.display = "none";
                    });
                }
            });

            // Append the listItem to the todoContainer
            todoContainer.appendChild(listItem);

            // Clear the input value
            inputElement.value = '';
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