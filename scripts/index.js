const [taskKey, indexKey, sep, complete, hidden] = ["iris.garden.todo.tasks", "iris.garden.todo.index", ";", "No more tasks remaining :o)", "hidden"]
const [taskVal, indexVal] = [taskKey, indexKey].map((key) => window.localStorage.getItem(key))
let tasks = taskVal === null ? [] : taskVal.split(sep)
let index = indexVal === null ? 0 : parseInt(indexVal)
const [main, task, input, inputBox] = ["main", "task", "input", "inputBox"].map((id) => document.getElementById(id))
const hide = (ele) => {
  ele.classList.add(hidden)
}
const show = (ele) => {
  ele.classList.remove(hidden)
}
const saveVal = (key, val) => {
  window.localStorage.setItem(key, val)
}
const saveTasks = () => {
  saveVal(taskKey, tasks.join(sep))
}
const saveIndex = () => {
  saveVal(indexKey, index.toString())
}
const displayTask = () => {
  if (index < tasks.length) {
    task.innerHTML = tasks[index]
  } else {
    task.innerHTML = complete
  }
}
const updateTask = () => {
  saveIndex()
  displayTask()
}
const done = () => {
  index += 1
  updateTask()
}
const restart = () => {
  hide(main)
  show(input)
  inputBox.value = tasks.join("\n")
}
const saveInput = () => {
  hide(input)
  show(main)
  tasks = inputBox.value.split("\n")
  saveTasks()
  index = 0
  updateTask()
}

updateTask()
