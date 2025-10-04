const API_URL = "/api/todos/";

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  renderTasks(tasks);
}

function renderTasks(tasks) {
  const container = document.querySelector(".task-list");
  container.innerHTML = ""; // clear old tasks

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = `task-item ${task.done ? "completed" : ""}`;
    div.dataset.taskId = task.id;

    div.innerHTML = `
      <div class="task-content">
        <span class="task-status">${task.done ? "✅" : "⬜"}</span>
        <span class="task-text">${task.title}</span>
      </div>
      <div class="task-actions">
        <button class="task-btn toggle">${task.done ? "↶" : "✓"}</button>
        <button class="task-btn delete">🗑</button>
      </div>
    `;

    // Toggle button
    div.querySelector(".toggle").addEventListener("click", () => toggleTask(task));
    // Delete button
    div.querySelector(".delete").addEventListener("click", () => deleteTask(task.id));

    container.appendChild(div);
  });
}

async function addTask(title) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title, done: false })
  });
  fetchTasks();
}

async function toggleTask(task) {
  await fetch(`${API_URL}${task.id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: task.title, done: !task.done })
  });
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}${id}/`, { method: "DELETE" });
  fetchTasks();
}

// Bind Add Task button
document.getElementById("addTaskBtn").addEventListener("click", () => {
  const title = prompt("Enter task title:");
  if (title) addTask(title);
});

// Initial load
fetchTasks();
