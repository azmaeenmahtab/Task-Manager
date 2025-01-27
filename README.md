TaskCove - Task Management Web Application
TaskCove is a simple yet powerful task management web application that allows users to add, update, remove, and mark tasks as done. It uses the browser's localStorage to persist tasks, making the application work even after the page is refreshed.

Features
Add Tasks: Create new tasks with titles, descriptions, priorities, and due dates.
Update Tasks: Edit existing tasks by updating their titles and descriptions.
Remove Tasks: Delete tasks that are no longer needed.
Mark Tasks as Done: Toggle the task status between "Done" and "Not Done".
Filter and Search: Filter tasks based on priority and status. Search tasks by title or description.
Sort Tasks: Sort tasks by priority or due date.
Persistent Storage: Task data is saved in localStorage, meaning tasks persist even after page reloads.
Tech Stack
Frontend: HTML, CSS, JavaScript
Storage: localStorage for task persistence
No Backend: The application is completely frontend-based with no need for server-side processing.
Github and Live Link
Github Repo Link:
https://github.com/fardin072/Task-Management-System---TaskCove.git
Live Link:
https://task-cove.netlify.app/
Usage
Adding a Task
Enter a task title, description, priority, and due date.
Click Add Task to add it to your list of tasks.
Updating a Task
Click Update on any task to modify its title and description.
After editing, the task will be updated in your task list.
Removing a Task
Click Remove on any task to permanently delete it from the list.
Marking a Task as Done
Click Mark Done to toggle the task status between "Done" and "Not Done".
Sorting and Filtering
Sort by Priority: Tasks will be sorted based on their priority (low, medium, high).
Sort by Due Date: Tasks will be sorted by their due date, with the earliest tasks shown first.
Filter by Priority: Show tasks with a specific priority.
Filter by Status: Show tasks that are either "Done" or "Not Done".
Search Tasks: Use the search bar to find tasks by their title or description.
Error Handling
TaskCove includes basic error handling:

If there’s an issue with localStorage (e.g., data corruption), the app will log the error and alert the user.
If the user tries to add a task without a title or description, the app will alert them to provide both fields.
If a task with the same title already exists, it will show a message to prevent duplication.
Contributing
Contributions are welcome! Feel free to fork the repository, open issues, and submit pull requests. Please make sure to follow the standard GitHub workflows for contributing.

License
This project is licensed under Azmaeen Mahtab
