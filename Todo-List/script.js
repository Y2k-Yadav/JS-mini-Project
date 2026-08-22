let inputBox = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let usersTask = [];

function renderTasks(totalTask) {
  taskList.innerHTML = "";
  totalTask.map((item) => {
    let { task, id } = item;
    let divEle = document.createElement("div");
    divEle.className = "task-item";
    divEle.innerHTML = `
            <p class="task-text">${task}</p>
            <button class="delete-btn" data-id="${id}">&#10006;</button>
        `;
    taskList.append(divEle);
    let deleteBtn = divEle.getElementsByClassName("delete-btn")[0];
    deleteBtn.addEventListener("click", removeTodo);
  });
}

  function removeTodo(e) {
    let removeId = e.target.dataset.id

    let newArray = usersTask.filter((item) => {
      if (String(item.id) != removeId) {
        return item;
      }
    });

    usersTask=newArray;
    renderTasks(usersTask)
  }


function addTask() {
  let value = inputBox.value.trim();
  if (value) {
    let newTask = createTask(value);
    usersTask.push(newTask);
    renderTasks(usersTask);
  }
}

function createTask(value) {
  return { task: value, id: Date.now() };
}
addBtn.addEventListener("click", addTask);
