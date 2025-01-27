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

    let description = document.querySelector('#taskDescription').value;

    let priority = document.querySelector('#taskPriority').value;
    // creating task object each time
    const newTask = new task(title, description, priority, createUniqueId());
    console.log(newTask)
    // pushing each object in array
    taskArray.push(newTask);
    console.log(taskArray);

    // Clear form inputs after adding the task
    document.querySelector('#taskTitle').value = '';
    document.querySelector('#taskDescription').value = '';
    document.querySelector('#taskPriority').value = '';

    // printing task on screen
    let taskList = document.querySelector('#taskList');
    taskList.style.display = 'flex';

    // title printing
    let span1 = document.createElement('span');
    span1.setAttribute('id', 'titleShow');
    span1.innerText = title;
    let div1 = document.createElement('div')
    div1.style.display = 'flex';
    div1.style.alignItems = 'center';

    let p1 = document.createElement('p')
    p1.innerText = 'Task Title : ';
    div1.append(p1);
    div1.append(span1);
    // taskList.append(div1)


    // description printing
    let span2 = document.createElement('span');
    // span2.setAttribute('id', 'titleShow');
    span2.innerText = description;
    let div2 = document.createElement('div')
    div2.style.display = 'flex';
    div2.style.alignItems = 'center';
    let p2 = document.createElement('p')
    p2.innerText = 'Task Description : ';
    div2.append(p2);
    div2.append(span2);
    // taskList.append(div2)

    // priority printing
    let span3 = document.createElement('span');
    // span2.setAttribute('id', 'titleShow');
    span3.innerText = priority;
    let div3 = document.createElement('div')
    div3.style.display = 'flex';
    div3.style.alignItems = 'center';
    let p3 = document.createElement('p')
    p3.innerText = 'Task Priority : ';
    div3.append(p3);
    div3.append(span3);
    // taskList.append(div3)

    let eachTaskDiv = document.createElement('div')
    eachTaskDiv.style.border = "2px solid black"
    eachTaskDiv.append(div1)
    eachTaskDiv.append(div2)
    eachTaskDiv.append(div3)
    taskList.append(eachTaskDiv)
    console.log(taskList)

});

document.querySelector('dltBtn').addEventListener('click', () => {
    console.log(taskArray)
})
