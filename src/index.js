document.addEventListener("DOMContentLoaded", () => {
  // Select form and task list
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get user input
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create new task element
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });

      // Append delete button to task item
      taskItem.appendChild(deleteButton);

      // Append task item to task list
      taskList.appendChild(taskItem);

      // Clear input field
      taskInput.value = "";
    }
  });
});
