document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildTodo(e.target["new-task-description"].value)
    form.reset()
  })
});

//Callback functions
function buildTodo(todo) {
  let li = document.createElement("li")
  let btn = document.createElement("button")
  li.textContent = `${todo} `
  li.style.listStyle ="none"
  btn.textContent = "X"
  li.appendChild(btn)
  btn.addEventListener("click", handleDelete)
  function buildDropDown() {
    let dropDown = document.createElement("select")
    dropDown.id = "priorityColors"
    const select = document.createElement("option")
    select.textContent = "Select Priority"
    const highPriority = document.createElement("option")
    highPriority.value = "red"
    highPriority.textContent = "High"
    const mediumPriority = document.createElement("option")
    mediumPriority.value = "yellow"
    mediumPriority.textContent = "Medium"
    const lowPriority = document.createElement("option")
    lowPriority.value = "green"
    lowPriority.textContent = "Low"
    dropDown.appendChild(select)
    dropDown.appendChild(highPriority)
    dropDown.appendChild(mediumPriority)
    dropDown.appendChild(lowPriority)
    li.appendChild(dropDown)
    dropDown.addEventListener("change", (e) => {
      li.style.color = e.target.value
    })
  }
  buildDropDown()
  document.querySelector("#tasks").appendChild(li)
}
function handleDelete(e) {
  e.target.parentNode.remove()
}