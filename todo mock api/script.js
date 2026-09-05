let taskInput = document.querySelector("#todo-input");
let addBtn = document.querySelector("#add-btn");
let todoContainer = document.querySelector("#todo-list");

let API = "https://6a9c256a0ad174e139e905bc.mockapi.io/api/v1/todos";
addBtn.addEventListener("click", postData);

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();
  todoContainer.innerHTML = ``;
  data.forEach((obj) => {
    let list = document.createElement("li");
    list.className = "todo-item";
    list.innerHTML = `<span class="todo-text">${obj.text}</span>
                        <input type="text" id="edit-input" value="${obj.text}" style='display:none';>
                    <div class="btn-group">
                        <button class="complete-btn">✏️</button>
                        <button class="edit-btn" style='display:none';>✔️</button>
                        <button class="delete-btn">X</button>
                    </div> `;

    let deleteBtn = list.querySelector(".delete-btn");
    let editBtn = list.querySelector(".complete-btn");
    let saveBtn = list.querySelector(".edit-btn");
    let editInput = list.querySelector("#edit-input");
    let todoText = list.querySelector(".todo-text");
    deleteBtn.addEventListener("click", function () {
      deleteData(obj.id);
    });
    editBtn.addEventListener("click", function () {
      editBtn.style.display = "none";
      saveBtn.style.display = "inline";
      editInput.style.display = "block";
      todoText.style.display = "none";
    });
    saveBtn.addEventListener("click", async function () {
      let editValue = editInput.value;
      let response = await updateData(obj.id, editValue);
      if (response.status === 200) {
        saveBtn.style.display = "none";
        editBtn.style.display = "inline";
        editInput.style.display = "none";
        todoText.style.display = "block";
        fetchData();
      }
    });

    todoContainer.append(list);
  });
}

async function postData() {
  let value = taskInput.value;
  let objData = {
    text: value.trim(),
  };
  let response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });
  console.log(response);
  if (response.status === 201) {
    fetchData();
  }
}

async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    fetchData();
  }
}

async function updateData(id, value) {
  let objData = {
    text: value.trim(),
  };
  let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  return response;
}

fetchData();
