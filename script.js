// Grab the necessary DOM elements
const taskinput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const addTaskButton =document.getElementById('addTaskButton');
const taskList =document.getElementById('taskList');

// add an eventListener to AddTask Button

addTaskButton.addEventListener('click',()=>{
    // Get the values from the input box and dropdown
    const taskText = taskinput.value.trim();
    const taskPriority = prioritySelect.value;
// validate Input
    if(!taskText){
        alert("please enter a text");
        return;
    }
// create a new list
    const listItem= document.createElement('li');
    listItem.textContent =taskText;
    taskList.appendChild(listItem);
    taskinput.value="";
})