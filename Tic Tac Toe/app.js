let word = ''
const allBtn = document.querySelectorAll('button')
const btn1 = document.querySelector('#one')
const btn2 = document.querySelector('#two')
const btn3 = document.querySelector('#three')
const btn4 = document.querySelector('#four')
const btn5 = document.querySelector('#five')
const btn6 = document.querySelector('#six')
const btn7 = document.querySelector('#seven')
const btn8 = document.querySelector('#eight')
const btn9 = document.querySelector('#nine')
const h1 = document.querySelector('h1')
const reset = document.querySelector('#reset')

btn1.addEventListener('click', abilities)
btn2.addEventListener('click', abilities)
btn3.addEventListener('click', abilities)
btn4.addEventListener('click', abilities)
btn5.addEventListener('click', abilities)
btn6.addEventListener('click', abilities)
btn7.addEventListener('click', abilities)
btn8.addEventListener('click', abilities)
btn9.addEventListener('click', abilities)


function abilities() {
    if (word === '') {
        this.innerHTML = 'X'
        word = 'O'
        this.disabled = true;
        this.style.backgroundColor = 'transparent';
        this.style.color = 'black';
    } else if (word === 'O') {
        this.innerHTML = 'O'
        word = 'X'
        this.disabled = true;
        this.style.backgroundColor = 'transparent';
        this.style.color = 'black';
    }
    else if (word === 'X') {
        this.innerHTML = 'X'
        word = 'O'
        this.disabled = true;
        this.style.backgroundColor = 'transparent';
        this.style.color = 'black';
    }
    setTimeout(() => winner(), 100)

}


function winner() {
    if (btn1.innerHTML === 'X' && btn2.innerHTML === 'X' &&
        btn3.innerHTML === 'X' || btn4.innerHTML === 'X' && btn5.innerHTML === 'X' && btn6.innerHTML === 'X' ||
        btn7.innerHTML === 'X' && btn8.innerHTML === 'X' && btn9.innerHTML === 'X') {
        alert('PLAYER X ARE THE WINNER')
        for (let btn of allBtn) {
            btn.disabled = true;
            btn.style.backgroundColor = 'transparent';
            reset.disabled = false;
        }
    }
    else if (btn1.innerHTML === 'O' && btn2.innerHTML === 'O' &&
        btn3.innerHTML === 'O' || btn4.innerHTML === 'O' && btn5.innerHTML === 'O' && btn6.innerHTML === 'O' ||
        btn7.innerHTML === 'O' && btn8.innerHTML === 'O' && btn9.innerHTML === 'O') {
        alert('PLAYER O ARE THE WINNER')
        for (let btn of allBtn) {
            btn.disabled = true;
            btn.style.backgroundColor = 'transparent';
            reset.disabled = false;
        }
    }
    else if (btn1.innerHTML === 'X' && btn4.innerHTML === 'X' &&
        btn7.innerHTML === 'X' || btn2.innerHTML === 'X' && btn5.innerHTML === 'X' && btn8.innerHTML === 'X' ||
        btn3.innerHTML === 'X' && btn6.innerHTML === 'X' && btn9.innerHTML === 'X') {
        alert('PLAYER X ARE THE WINNER')
        for (let btn of allBtn) {
            btn.disabled = true;
            btn.style.backgroundColor = 'transparent';
            reset.disabled = false;
        }
    }
    else if (btn1.innerHTML === 'O' && btn4.innerHTML === 'O' &&
        btn7.innerHTML === 'O' || btn2.innerHTML === 'O' && btn5.innerHTML === 'O' && btn8.innerHTML === 'O' ||
        btn3.innerHTML === 'O' && btn6.innerHTML === 'O' && btn9.innerHTML === 'O') {
        alert('PLAYER O ARE THE WINNER')
        for (let btn of allBtn) {
            btn.disabled = true;
            btn.style.backgroundColor = 'transparent';
            reset.disabled = false;
        }
    }
    else if (btn1.innerHTML === 'O' && btn5.innerHTML === 'O' &&
        btn9.innerHTML === 'O' || btn3.innerHTML === 'O' && btn5.innerHTML === 'O' && btn7.innerHTML === 'O') {
        alert('PLAYER O ARE THE WINNER')
        for (let btn of allBtn) {
            btn.disabled = true;
            btn.style.backgroundColor = 'transparent';
            reset.disabled = false;
        }
    }
    else if (btn1.innerHTML === 'X' && btn5.innerHTML === 'X' &&
        btn9.innerHTML === 'X' || btn3.innerHTML === 'X' && btn5.innerHTML === 'X' && btn7.innerHTML === 'X') {
        alert('PLAYER X ARE THE WINNER')
        for (let btn of allBtn) {
            btn.disabled = true;
            btn.style.backgroundColor = 'transparent';
            reset.disabled = false;
        }
    }
    else if (btn1.innerHTML && btn2.innerHTML &&
        btn3.innerHTML && btn4.innerHTML && btn5.innerHTML && btn6.innerHTML &&
        btn7.innerHTML && btn8.innerHTML && btn9.innerHTML) {
        alert('NOBODY WON LMAO TRY AGAIN')

    }
}


reset.addEventListener('click', () => {
    for (let btn of allBtn) {
        btn.disabled = false;
        btn.style.backgroundColor = 'plum';
        reset.style.backgroundColor = 'transparent';
        btn.innerHTML = ''
        word = ''
        reset.innerHTML = 'Restart'
    }
})


