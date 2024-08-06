let inputBox = document.querySelector(".input-box")
let submitButton = document.querySelector(".submit-button")
let listContainer = document.querySelector(".list-container")

function createTask() {
    if (inputBox.value === "") {
        alert("You need write something.")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        save()
    }
    inputBox.value = ""
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
}, false)

function save() {
    localStorage.setItem("data", listContainer.value)
}

listContainer.value = localStorage.getItem("data")