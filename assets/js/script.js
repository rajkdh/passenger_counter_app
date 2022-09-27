

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

let totalCount = 0;

function increment() {
    totalCount += 1
    countEl.innerText = totalCount
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let savedEntries = ' ' + totalCount + ' - '

    saveEl.textContent += savedEntries
    countEl.innerText = 0
    totalCount = 0

}
    


//set back to zero everytime you hit save. 2 sets of code.











