document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get user input value
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create a new <li> element and set its text content
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      // Append the new task to the task list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = "";
    }
  });
});
