document.getElementById('weekDay');
const weekDay = prompt('What day is it today?');
if (weekDay === 'Monday') {
    console.log(weekDay);
}






//Initialize an array to store tasks
let tasks = []

//Add an event listener to add tasks to the add task btn
document.getElementById('addTaskBtn').addEventListener('click', 'enter', function() {
    //Storing text-value from input box as a variable 'taskInput'
    let taskInput = document.getElementById('taskInput').value

    //This line of code below is the if statement checking if there is any input in the text-box to enter in tasks
    if (taskInput){ 
    //This line of code below pushes the id of task input into this if statement
    tasks.push(taskInput) 
    //This line of code below clears the text-box to input the tasks after you press the Add-Task Button
    document.getElementById('taskInput').value = ''
    //This line of code below is going to display my tasks on my to-do list
     displayTasks()
    }

}) document.getElementById('addTaskBtn').addEventListener('keydown')


// Function to display the tasks from tasks[] in the Unordered List below
function displayTasks () {
    // Select the unordered list (tasklist) in the HTML
    let taskList = document.getElementById('taskList')

    //Clear the existing task list before updating it
    taskList.innerHTML = ''

    // Loop through each task in the array and create a list item
    tasks.forEach ((task, index) => {
        // Create a new <li> element for each task
        let li = document.createElement('li')

        // Add Bootstrap classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )
        
        // Set the inner HTML of the <li> element with task text and a remove button
        li.innerHTML=`${task} <button class='btn btn-success btn-sm' onclick='removeTask(${index})'>√ </button> <button class='btn btn-danger btn-sm' onclick='removeTask(${index})'>x </button>`;

      
    // Append the new task to the task list
    taskList.appendChild(li)   
    })
}

// Function to remove a task from the list when the "√" button is clicked
function removeTask (index){
     // Remove the task at the given index from the array
     tasks.splice(index, 1);
    
     //Call the function to update the task list display
     displayTasks()

     
}

// Event listener for the "Clear All Tasks" button
document.getElementById('clearTaskBtn').addEventListener('click', function () {
       
// Clear the tasks array 
    tasks = []

// Call the function to update the display tasks
    displayTasks()

})
