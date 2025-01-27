// Array to hold tasks
let taskArray = [];

// Function to display tasks in the DOM
const displayTasks = () => {
    const outputDiv = document.getElementById("allTaskList");
    outputDiv.innerHTML = "";

    taskArray.forEach((task) => {
        const taskCard = document.createElement("p");
        taskCard.className = "task-card";
        taskCard.innerHTML = `
      <strong>Title:</strong> ${task.title}<br/>
      <strong>Description:</strong> ${task.description}<br/>
      <strong>Priority:</strong> ${task.priority}<br/>
      <button class="toggleBtn" data-id="${task.taskId}">${task.isCompleted ? "Complete" : "Incomplete"} 
      <button class="deleteBtn" data-id="${task.taskId}">Delete</button>
      <button class="updateBtn" data-id="${task.taskId}">Update</button>
    `;
        outputDiv.appendChild(taskCard);
    });

    // add event listener to toggle btn
    document.querySelectorAll('.toggleBtn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const taskId = event.target.getAttribute("data-id");
            toggleTask(taskId);
        })
    })

    // Add event listeners to update buttons
    document.querySelectorAll(".updateBtn").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const taskId = event.target.getAttribute("data-id");
            updateTask(taskId);
        });
    });

    // Add event listeners to delete buttons
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const taskId = event.target.getAttribute("data-id");
            deleteTask(taskId);
        });
    });
};
// toggle task function
const toggleTask = (taskId) => {
    const task = taskArray.find((task) => task.taskId === taskId);
    if (task) {
        task.isCompleted = !task.isCompleted;

        localStorage.setItem('Tasks', JSON.stringify(taskArray));

        displayTasks();
    }

}


// update task function
const updateTask = (taskId) => {
    const task = taskArray.find((task) => task.taskId === taskId)

    if (task) {
        const newTitle = prompt('Enter new title : ', task.title);
        const newDescription = prompt("Enter new description:", task.description);
        const newPriority = prompt("Enter new priority (Low, Medium, High):", task.priority);

        if (!newTitle || !newDescription || !newPriority) {
            alert("All fields must be filled!");
            return;
        }

        task.title = newTitle;
        task.description = newDescription;
        task.priority = newPriority;
        console.log(taskArray)

        localStorage.setItem('Tasks', JSON.stringify(taskArray));


    } else {
        console.error("Task not found!");
    }
    displayTasks();

}

// Function to load tasks from localStorage
const setStoredData = () => {
    const storedData = localStorage.getItem("Tasks");
    if (storedData) {
        taskArray = JSON.parse(storedData);
        displayTasks();
    }
};

// Constructor function for creating a task
function Task(title, description, priority, id) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.taskId = id;
    this.isCompleted = false;
}

// Event listener for adding a new task
document.querySelector("#addTask").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Generate unique ID
    const createUniqueId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
    };

    // Get form values
    const title = document.querySelector("#taskTitle").value.trim();
    const description = document.querySelector("#taskDescription").value.trim();
    const priority = document.querySelector("#taskPriority").value;

    // Validate form inputs
    if (!title || !description || !priority) {
        alert("Please fill in all fields!");
        return;
    }

    // Create a new task and add it to the array
    const newTask = new Task(title, description, priority, createUniqueId());
    taskArray.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(taskArray));

    // Clear form fields
    document.querySelector("#taskTitle").value = "";
    document.querySelector("#taskDescription").value = "";
    document.querySelector("#taskPriority").value = "";

    // Update the task list display
    displayTasks();
});



// Function to delete task by taskId
const deleteTask = (taskId) => {
    // Filter out the task by taskId
    taskArray = taskArray.filter((task) => task.taskId !== taskId);

    localStorage.setItem("Tasks", JSON.stringify(taskArray));

    // Update the task list display
    displayTasks();
};



// Load tasks on page load
setStoredData();