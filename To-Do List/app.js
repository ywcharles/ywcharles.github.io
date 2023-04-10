// file: app.js
// purpose: Script for a to do list
// author: Charles Wu

// number that will be used to assign ids to the task
let taskNum = 1;

// add a task div to the html
function getTask(){
    // create IDs
    let taskID = `task${taskNum}`;
    let deleteID = `delete${taskNum}`;

    let inputBox = document.getElementById('task-input');
    let inputTask = inputBox.value;
    let newTask = document.createElement('div');

    // check if there's an input
    if(!(inputTask === '')){
        newTask.classList.add('task');

        // task div inner HTML
        newTask.innerHTML = `<input type="checkbox" class = "check-task" id = "${taskID}">
                <label for = "${taskID}">${inputTask}</label>
                <button class = "delete" id = "${deleteID}">x</button>`

        // add the div HTML to the file
        document.getElementById('dashboard').appendChild(newTask)

        // event listener to delete task
        document.getElementById(deleteID).addEventListener('click', deleteTask);

        // increment the number for the ID's and empty input box
        taskNum += 1;
        inputBox.value = ''
    }
}

// delete a task
function deleteTask(){
    let oldTask = this.parentElement;
   oldTask.remove();
}

document.getElementById('add').addEventListener("click", getTask);
