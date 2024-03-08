document.getElementsByClassName("task_inp")[0].addEventListener("click", () => {
  console.log("clicked task input");
  document
    .querySelectorAll(".show")
    .forEach((items) => items.classList.remove("hidden_items"));
});

document.addEventListener("click", () => {
  document
    .querySelectorAll(".show")
    .forEach((items) => items.classList.add("hidden_items"));
});

document.getElementsByClassName('add_task')[0]
.addEventListener("click", () => {
  const task_data = {
    title: document.getElementsByClassName("task_title")[0].value,
    description: document.getElementsByClassName("task_desc")[0].value,
  };
  if(task_data.title  && task_data.description) {createTasks(task_data)}
  else{
    document.getElementsByClassName('notify')[0].style.display= 'block';
    setTimeout(()=>{document.getElementsByClassName('notify')[0].style.display= 'none';},2000)
  }
  
  // cleaning values 
  document.getElementsByClassName("task_title")[0].value = "";
  document.getElementsByClassName("task_desc")[0].value = "";
});

function deleteTask(e){
  console.log(e.target.parentNode.parentNode.parentNode.rowIndex);
  const container = document.getElementsByClassName("task_container")[0];
  container.deleteRow(e.target.parentNode.parentNode.parentNode.rowIndex);
}


var index = -1;
function createTasks(task_data) {
  const {title, description} = task_data;
  document.getElementsByClassName(
    "task_container"
  )[0].innerHTML += `<tr class="tasks ">
  <td class="shadow p-3">
  <h3>${title}</h3>
  <p class="desc">${description}</p>
  <button class="btn d-block ms-auto btn-danger " > <i class="fi fi-rs-trash" onclick="deleteTask(event);"></i></button>
  </td>
  </tr>`;
}





// notifying

