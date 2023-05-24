/*
    TODO:
    - Fix todo list save storage thingy
*/

// Define html elements and assign them to a variable
let todoContainer = document.getElementById("todo-container");
let htmlForm = document.getElementById("todo-form");
let inputBox = document.getElementById("todo-input");

htmlForm.addEventListener("submit", function(event){
    event.preventDefault();

    let inputElement = inputBox;
    if (inputElement.value !== "") {
        // Create list item and div for the text
        let listItem = document.createElement("li");
        listItem.style.display = "item-list";
        listItem.style.marginTop = "10px";
        
        let divText  = document.createElement("div");
        divText.style.fontSize = "16px";
        divText.style.display = "inline-block";
        divText.style.marginBottom = "10px";
        listItem.appendChild(divText);

        let inputValue = inputElement.value;
        divText.textContent = inputValue;

        let buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Edit";
        // Apply CSS styles
        buttonEdit.style.backgroundColor = "yellow";
        buttonEdit.style.color = "black";

        buttonEdit.style.marginRight = "100%";
        buttonEdit.style.padding = "10px 30px";

        buttonEdit.style.border = "none";
        buttonEdit.style.borderRadius = "5px";

        buttonEdit.style.boxShadow = "black 0px 0px 1px"

        buttonEdit.style.cursor = "pointer";

        listItem.appendChild(buttonEdit);

        let buttonSave = document.createElement("button");
        buttonSave.textContent = "Save";
        // Apply CSS styles
        buttonSave.style.backgroundColor = "#33ff00";
        buttonSave.style.color = "white";
        
        buttonSave.style.display = "none";
        buttonSave.style.marginRight = "100%";
        buttonSave.style.padding = "10px 26px";

        buttonSave.style.border = "none";
        buttonSave.style.borderRadius = "5px";

        buttonSave.style.boxShadow = "black 0px 0px 1px";
        buttonSave.style.cursor = "pointer";


        buttonSave.style.display = "none";
        listItem.appendChild(buttonSave);

        let buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        // Apply CSS styles
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

        buttonDelete.addEventListener("click", function(){
            listItem.remove();
        });

        buttonEdit.addEventListener("click", function(){
            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = divText.textContent;

            divText.innerHTML = '';
            divText.appendChild(editInput);

            buttonEdit.style.display = "none";
            buttonSave.style.display = "inline-block";

            editInput.focus();

            // Add a blur event listener to save the edited text
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