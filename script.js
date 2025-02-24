//Initialize an array to store tasks
let tasks = []

//Add an event listener to add tasks to the add task btn
document.getElementById('addTaskBtn').addEventListener('click', function() {
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

})
