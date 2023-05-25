/*
    TODO:
    * Fix todo list save LocalStorage
    * Make input value required on buttonEdit and can not be empty
    * Keydown "Enter" after editing selected list item

    ! Do these after the task is done:
    * Highlight done task "green" and uncompleted task "red"
    * Sortable via Date
    * Priority sorting
    * Filter items
*/

// Define html elements and assign them to a variable
let todoContainer = document.getElementById("todo-container");
let htmlForm = document.getElementById("todo-form");
let inputBox = document.getElementById("todo-input");
inputBox.setAttribute("required", "");

// Function to save tasks to LocalStorage
function saveTasksToLocalStorage() {
    let tasks = [];

    // Get all list items
    let listItems = todoContainer.querySelectorAll('.list-item');
    listItems.forEach((listItem) => {
        let taskText = listItem.querySelector('.div-text').textContent;
        tasks.push(taskText);
    });

    // Convert tasks to a JSON string and save in localStorage
    let tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
}

// Load tasks from localStorage on page load
window.onload = function() {
    // Retrieve tasks from localStorage
    let tasksJSON = localStorage.getItem('tasks');
    if (tasksJSON) {
        let tasks = JSON.parse(tasksJSON);

        // Add each task to the to-do list
        tasks.forEach((taskText) => {
            // Create a list item and style it using CSS property
            let listItem = document.createElement("li");
            listItem.className = "list-item";
            
            // Create a div to hold the todo text and style it using CSS property
            let divText  = document.createElement("div");
            divText.className = "div-text";
            divText.textContent = taskText;
            listItem.appendChild(divText);
            
            // Create an Edit button and style it using CSS property
            let buttonEdit = document.createElement("button");
            let editIcon = document.createElement("i")
            
            // Set the text content of the buttonEdit element to "Edit" and add the class "button-edit".
            buttonEdit.textContent = "Edit";
            buttonEdit.className = "button-edit";

            // Icon styling
            editIcon.className = "fa-solid fa-pen-to-square";
            editIcon.style.paddingLeft = "6px";

            listItem.appendChild(buttonEdit);
            buttonEdit.appendChild(editIcon);

            // Create a Save button and style it using CSS property
            let buttonSave = document.createElement("button");
            let saveIcon = document.createElement("i");

            // Set the text content of the buttonSave element to "Save" and add the class "button-save".
            buttonSave.textContent = "Save";
            buttonSave.className = "button-save";

            // Icon styling
            saveIcon.className = "fa-solid fa-bookmark";
            saveIcon.style.paddingLeft = "6px";

            listItem.appendChild(buttonSave);
            buttonSave.appendChild(saveIcon)

            // Create a Delete button and style it using CSS property
            let buttonDelete = document.createElement("button");
            let deleteIcon = document.createElement("i")

            // Set the text content of the buttonDelete element to "Delete" and add the class "button-delete".
            buttonDelete.textContent = "Delete";
            buttonDelete.className = "button-delete";

            // Icon styling
            deleteIcon.className = "fa-solid fa-trash";
            deleteIcon.style.paddingLeft = "6px";
            
            listItem.appendChild(buttonDelete);
            buttonDelete.appendChild(deleteIcon);

            // Delete the todo item when the Delete button is clicked
            buttonDelete.addEventListener("click", function(){
                listItem.remove();
        });

        // Change the todo item when the Edit button is clicked
        buttonEdit.addEventListener("click", function(){
            // Create a Input element and assign it to a Edit variable
            let editInput = document.createElement("input");

            // Replace the todo text with an input field
            divText.innerHTML = '';
            divText.appendChild(editInput);

            // Hide the edit button
            buttonEdit.style.display = "none";
            // Show the save button
            buttonSave.style.display = "flex";

            // Save task to localStorage when new task is added
            saveTaskToStorage();

            // Focus the input field for immediate editing
            editInput.focus();

            // Save the edited todo text when focus leaves the input field visually
            editInput.addEventListener("blur", function () {
                // Update the divText with the edited value
                divText.textContent = editInput.value;
            
                // Show the edit button
                buttonEdit.style.display = "flex";
                // Hide the save button
                buttonSave.style.display = "none";
            });
        });
            
            // Append the listItem to the todoContainer
            todoContainer.appendChild(listItem);
        });
    }
};

// Add event listener to the form to handle button submission
htmlForm.addEventListener("submit", function(event){
    // Prevent default page refresh
    event.preventDefault();

    // Create a constant arrow function to store item list into an array and save it to localStorage 
    const saveTaskToStorage = () => {
        // declare an empty task array initialize it to empty
        let tasks = [];
        // Get List items
        let listItems = document.querySelectorAll(".list-item");
        // Loop through each listItem
        listItems.forEach((listItem) => {
            // Declare a variable named taskText and add textContent from div-text
            let taskText = listItem.querySelector(".div-text").textContent;
            // Push taskText variable into tasks array
            tasks.push(taskText);
        });
        // Convert JSON to string and save it into the localStorage
        let tasksJSON = JSON.stringify(tasks);
        localStorage.setItem("tasks", tasksJSON);
    }

    let inputElement = inputBox;
    if (inputElement.value !== "") {
        // Create a list item and style it using CSS property
        let listItem = document.createElement("li");
        listItem.className = "list-item";
        
        // Create a div to hold the todo text and style it using CSS property
        let divText  = document.createElement("div");
        divText.className = "div-text";

        listItem.appendChild(divText);

        // Set todo text from the input
        let inputValue = inputElement.value;
        divText.textContent = inputValue;

        // Create an Edit button and style it using CSS property
        let buttonEdit = document.createElement("button");
        let editIcon = document.createElement("i")
        
        // Set the text content of the buttonEdit element to "Edit" and add the class "button-edit".
        buttonEdit.textContent = "Edit";
        buttonEdit.className = "button-edit";

        // Icon styling
        editIcon.className = "fa-solid fa-pen-to-square";
        editIcon.style.paddingLeft = "6px";

        listItem.appendChild(buttonEdit);
        buttonEdit.appendChild(editIcon);

        // Create a Save button and style it using CSS property
        let buttonSave = document.createElement("button");
        let saveIcon = document.createElement("i");

        // Set the text content of the buttonSave element to "Save" and add the class "button-save".
        buttonSave.textContent = "Save";
        buttonSave.className = "button-save";

        // Icon styling
        saveIcon.className = "fa-solid fa-bookmark";
        saveIcon.style.paddingLeft = "6px";

        listItem.appendChild(buttonSave);
        buttonSave.appendChild(saveIcon)

        // Create a Delete button and style it using CSS property
        let buttonDelete = document.createElement("button");
        let deleteIcon = document.createElement("i")

        // Set the text content of the buttonDelete element to "Delete" and add the class "button-delete".
        buttonDelete.textContent = "Delete";
        buttonDelete.className = "button-delete";

        // Icon styling
        deleteIcon.className = "fa-solid fa-trash";
        deleteIcon.style.paddingLeft = "6px";
        
        listItem.appendChild(buttonDelete);
        buttonDelete.appendChild(deleteIcon);

        // Delete the todo item when the Delete button is clicked
        buttonDelete.addEventListener("click", function(){
            listItem.remove();
        });

        // Change the todo item when the Edit button is clicked
        buttonEdit.addEventListener("click", function(){
            // Create a Input element and assign it to a Edit variable
            let editInput = document.createElement("input");

            // Replace the todo text with an input field
            divText.innerHTML = '';
            divText.appendChild(editInput);

            // Hide the edit button
            buttonEdit.style.display = "none";
            // Show the save button
            buttonSave.style.display = "flex";

            // Save task to localStorage when new task is added
            saveTaskToStorage();

            // Focus the input field for immediate editing
            editInput.focus();

            // Save the edited todo text when focus leaves the input field visually
            editInput.addEventListener("blur", function () {
                // Update the divText with the edited value
                divText.textContent = editInput.value;
            
                // Show the edit button
                buttonEdit.style.display = "flex";
                // Hide the save button
                buttonSave.style.display = "none";
            });
        });

        todoContainer.appendChild(listItem);
        inputElement.value = '';

        // Save task to localStorage when new task is added
        saveTaskToStorage();        
    }
});