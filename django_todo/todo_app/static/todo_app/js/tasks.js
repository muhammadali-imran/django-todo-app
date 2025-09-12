// static/js/tasks.js

document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelector(".task-list");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const clearCompletedBtn = document.getElementById("clearCompletedBtn");
  const progressFill = document.querySelector(".progress-fill");
  const progressText = document.querySelector(".progress-text");
  const statTotal = document.querySelector(".stat-badge.total");
  const statCompleted = document.querySelector(".stat-badge.completed");

  // Utility: update progress + stats
  function updateProgress() {
    const tasks = document.querySelectorAll(".task-item");
    const completed = document.querySelectorAll(".task-item.completed");
    const total = tasks.length;

    const percent = total === 0 ? 0 : Math.round((completed.length / total) * 100);

    if (progressFill) progressFill.style.width = percent + "%";
    if (progressText) progressText.textContent = percent + "% Complete";

    if (statTotal) statTotal.textContent = `${total} Total`;
    if (statCompleted) statCompleted.textContent = `${completed.length} Done`;
  }

  // Toggle task completion
  function toggleTask(e) {
    const taskItem = e.target.closest(".task-item");
    if (!taskItem) return;

    taskItem.classList.toggle("completed");

    // Swap status icon + button
    const status = taskItem.querySelector(".task-status");
    const btn = taskItem.querySelector(".task-btn.toggle");

    if (taskItem.classList.contains("completed")) {
      status.textContent = "✅";
      btn.textContent = "↶";
    } else {
      status.textContent = "⬜";
      btn.textContent = "✓";
    }

    updateProgress();
  }

  // Clear completed tasks
  function clearCompleted() {
    document.querySelectorAll(".task-item.completed").forEach(el => el.remove());
    updateProgress();
  }

  // Add a new task
  function addTask(title = null) {
    const newTitle = title || prompt("Enter task title:");
    if (!newTitle) return;

    const newTask = document.createElement("div");
    newTask.className = "task-item";
    newTask.innerHTML = `
      <div class="task-content">
        <span class="task-status">⬜</span>
        <span class="task-text">${newTitle}</span>
      </div>
      <div class="task-actions">
        <button class="task-btn toggle" title="Toggle completion">✓</button>
      </div>
    `;

    taskList.appendChild(newTask);
    updateProgress();
  }

  // Event delegation for toggle buttons
  if (taskList) {
    taskList.addEventListener("click", e => {
      if (e.target.classList.contains("toggle")) toggleTask(e);
    });
  }

  // Add task button
  if (addTaskBtn) addTaskBtn.addEventListener("click", () => addTask());

  // Clear completed button
  if (clearCompletedBtn) clearCompletedBtn.addEventListener("click", clearCompleted);

  // Handle "Add First Task" in empty state
  const emptyAddBtn = document.querySelector(".empty-state .add-btn");
  if (emptyAddBtn) emptyAddBtn.addEventListener("click", () => addTask());

  // Init progress on load
  updateProgress();
});
