const btnElement = document.querySelector(".btn")
const inputElement = document.getElementById("input-field")
const taskeElement = document.querySelector(".list-item")

btnElement.addEventListener(("click"), () => {
    // console.log(inputElement.value)
    if (inputElement.value === "") {
        alert("Add your task first")
    } else {
        let listelement = document.createElement("li")
        listelement.textContent = inputElement.value
        taskeElement.appendChild(listelement)

        let spanElement = document.createElement("span")
        spanElement.textContent = "\u00d7"
        listelement.appendChild(spanElement)
    }
    inputElement.value = ""
    saveli()
})
taskeElement.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked")
        saveli()
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove()
        saveli()
    }
})

function saveli() {
    localStorage.setItem("task", taskeElement.innerHTML)
}
function getElement() {
    taskeElement.innerHTML = localStorage.getItem("task")
}
getElement()