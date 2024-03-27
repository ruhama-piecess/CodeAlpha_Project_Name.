// Variables
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const task = input.value.trim(); // Get task value and remove leading/trailing whitespace

  if (task !== '') {
    addTask(task); // Add the task to the list
    input.value = ''; // Clear the input field
  }
});

// Function to add a task to the list
function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <button onclick="removeTask(this)">Remove</button>
  `;
  todoList.appendChild(li);
}

// Function to remove a task from the list
function removeTask(button) {
  const li = button.parentElement;
  todoList.removeChild(li);
}