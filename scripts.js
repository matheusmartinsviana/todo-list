let inputBox = document.getElementById("input-box")
let submitButton = document.getElementById("submit-button")
let listContainer = document.getElementById("list-container")

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
    }
    inputBox.value = ""
}

listContainer.addEventListener("click", function(e) {
if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
}, false)