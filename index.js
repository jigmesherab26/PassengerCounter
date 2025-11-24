const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const incrementBtn = document.getElementById("increment-btn")
// const saveBtn = document.getElementById("save-btn")
let count = 0

incrementBtn.addEventListener("click", function(){
    count += 1
    countEl.textContent = count
})

function save() {
    let separator = ""
    if(saveEl.textContent !== "")
    {
        separator = " - "
    }
    saveEl.textContent += separator + count
    countEl.textContent = 0
    count = 0
}
