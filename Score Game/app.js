let i1 = document.querySelector('#player1')
let i2 = document.querySelector('#player2')

let player1 = parseInt(i1.innerHTML)
let player2 = parseInt(i2.innerHTML)
let attempt = 1
const i = document.querySelector('i')
const h2 = document.querySelector('h2')
const select = document.querySelector('select')
const buttonOne = document.querySelector('#one')
const buttonTwo = document.querySelector('#two')
const reset = document.querySelector('#reset')

select.addEventListener('change', (evt) => {
    evt.preventDefault()
    attempt = parseInt(select.value)
    console.log(attempt)
    select.disabled = true;
    select.style.backgroundColor = 'white'
})




buttonOne.addEventListener('click', () => {
    player1++
    h2.innerText = `${player1} to ${player2}`
    if (player1 === attempt) {
        buttonOne.disabled = true
        buttonTwo.disabled = true;
        h2.innerText = ` to `
        const span = document.createElement('span')
        span.innerText = player1
        span.style.color = 'green'
        h2.insertAdjacentElement('afterbegin', span)
        const anotherSpan = document.createElement('span')
        anotherSpan.innerText = player2
        anotherSpan.style.color = 'red'
        h2.insertAdjacentElement('beforeend', anotherSpan)
    }


})
buttonTwo.addEventListener('click', () => {
    player2++
    h2.innerText = `${player1} to ${player2}`
    if (player2 === attempt) {
        buttonOne.disabled = true
        buttonTwo.disabled = true;
        h2.innerText = ` to `
        const span = document.createElement('span')
        span.innerText = player2
        span.style.color = 'green'
        h2.insertAdjacentElement('beforeend', span)
        const anotherSpan = document.createElement('span')
        anotherSpan.innerText = player1
        anotherSpan.style.color = 'red'
        h2.insertAdjacentElement('afterbegin', anotherSpan)
    }

})



reset.addEventListener('click', () => { // it make it happen thanks to addEventListener
    buttonOne.disabled = false;
    buttonTwo.disabled = false
    select.disabled = false;
    player1 = 0
    player2 = 0
    h2.innerText = "0 to 0"
})


// function sumDigPow(a, b) {
//     // Your code here
//     let list = []
//     for (let i = a; i <= b; i++) {
//         let newI = i.toString()
//         if (newI.length > 0) {
//             let num = 0
//             for (let j = 0; j < newI.length; j++) {
//                 num = num + Math.pow(parseInt(newI[j]), j + 1)
//             }
//             if (num === i) {
//                 list.push(i)
//             }
//         }

//     }
//     return list
// }

// console.log(sumDigPow(90, 150))