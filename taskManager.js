// constructor dunction to create object for each task
function task(title, description, priority, id) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.taskId = id;
}

// array of tasks
let taskArray = [];

document.querySelector('#addTask').addEventListener('click', () => {
    // unique id 
    function createUniqueId() {
        const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
        return id;

    }
    // accessing values from form
    let title = document.querySelector('#taskTitle').value;
    console.log(title)

    let description = document.querySelector('#taskDescription').value;

    let priority = document.querySelector('#taskPriority').value;
    // creating task object each time
    const newTask = new task(title, description, priority, createUniqueId());
    console.log(newTask)
    // pushing each object in array
    taskArray.push(newTask);
    console.log(taskArray)

    // Clear form inputs after adding the task
    document.querySelector('#taskTitle').value = '';
    document.querySelector('#taskDescription').value = '';
    document.querySelector('#taskPriority').value = '';

    // deletation of tasks
    const dltButton = document.createElement('button')
    dltButton.innerText = 'Delete Task';
    dltButton.setAttribute('id', 'dltBtn');

    document.querySelector('#taskForm').append(dltButton)
});
