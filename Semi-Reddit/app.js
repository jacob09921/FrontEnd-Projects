const form = document.querySelector('#form')
const inp1 = document.querySelector('#username')
const inp2 = document.querySelector('#create')
const ul = document.querySelector('#list-container')
const li = document.querySelectorAll('li')
form.addEventListener(('submit'), (evt) => {
    evt.preventDefault()
    const list = document.createElement('li')
    const button = document.createElement('button')
    button.innerText = 'Delete'
    list.innerText = `"${inp2.value}" created post by ${inp1.value}`
    ul.appendChild(list)
    list.appendChild(button)
    list.style.marginBottom = "10px"
    button.style.marginLeft = "10px"
    inp1.value = ""
    inp2.value = ""
})

ul.addEventListener('click', (evt) => {
    evt.stopPropagation()
    if (evt.target.nodeName === "BUTTON") {
        const li = list()
        li.remove()
    }
})


function list() { // Function
    const li = document.querySelector('li')
    return li
}
