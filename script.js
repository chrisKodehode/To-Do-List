/*
    TODO:
    - Fix todo list save storage thingy
*/

// Define html elements and assign them to a variable
let todoContainer = document.getElementById("todo-container");
let htmlForm = document.getElementById("todo-form");
let inputBox = document.getElementById("todo-input");

// Add event listener to the form to handle button submission
htmlForm.addEventListener("submit", function(event){
    // Prevent default page refresh
    event.preventDefault();

    let inputElement = inputBox;
    if (inputElement.value !== "") {
        // Create list item and div for the text
        let listItem = document.createElement("li");
        listItem.style.marginTop = "10px";
        
        // Create a div to hold the todo text
        let divText  = document.createElement("div");
        divText.style.fontSize = "16px";

        divText.style.display = "inline-block";
        divText.style.marginBottom = "10px";
        listItem.appendChild(divText);

        // Set todo text from the input
        let inputValue = inputElement.value;
        divText.textContent = inputValue;

        // Create an Edit button and style it using CSS property
        let buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Edit";
        buttonEdit.style.backgroundColor = "yellow";
        buttonEdit.style.color = "black";

        buttonEdit.style.marginRight = "100%";
        buttonEdit.style.padding = "10px 30px";

        buttonEdit.style.border = "none";
        buttonEdit.style.borderRadius = "5px";

        buttonEdit.style.boxShadow = "black 0px 0px 1px"

        buttonEdit.style.cursor = "pointer";

        listItem.appendChild(buttonEdit);

        // Create a Save button and style it using CSS property
        let buttonSave = document.createElement("button");
        buttonSave.textContent = "Save";
        buttonSave.style.backgroundColor = "#33ff00";
        buttonSave.style.color = "white";
        
        buttonSave.style.display = "none";
        buttonSave.style.marginRight = "100%";
        buttonSave.style.padding = "10px 26px";

        buttonSave.style.border = "none";
        buttonSave.style.borderRadius = "5px";

        buttonSave.style.boxShadow = "black 0px 0px 1px";
        buttonSave.style.cursor = "pointer";

        listItem.appendChild(buttonSave);

        // Create a Delete button and style it using CSS property
        let buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        buttonDelete.style.backgroundColor = "red";
        buttonDelete.style.color = "black";

        buttonDelete.style.marginRight = "100%"
        buttonDelete.style.marginTop = "10px"
        buttonDelete.style.padding = "10px 22px";

        buttonDelete.style.border = "none";
        buttonDelete.style.borderRadius = "5px";

        buttonDelete.style.boxShadow = "black 0px 0px 1px"

        buttonDelete.style.cursor = "pointer";

        listItem.appendChild(buttonDelete);

        // Delete the todo item when the Delete button is clicked
        buttonDelete.addEventListener("click", function(){
            listItem.remove();
        });

        // Change the todo item when the Edit button is clicked
        buttonEdit.addEventListener("click", function(){
            let editInput = document.createElement("input");

            // Replace the todo text with an input field
            divText.innerHTML = '';
            divText.appendChild(editInput);

            // Hide the edit button
            buttonEdit.style.display = "none";
            // Show the save button
            buttonSave.style.display = "inline-block";

            // Focus the input field for immediate editing
            editInput.focus();

            // Save the edited todo text when focus leaves the input field
            editInput.addEventListener("blur", function () {
                // Update the divText with the edited value
                divText.textContent = editInput.value;
            
                // Show the edit button
                buttonEdit.style.display = "inline-block";
                // Hide the save button
                buttonSave.style.display = "none";
            });
        });

        todoContainer.appendChild(listItem);
        inputElement.value = '';
    }
});