const score = document.querySelector('#scoreboard h1')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const reset = document.querySelector('#button button')
const container = document.querySelector('.buttons')
const containerForNewGame = document.querySelector('#newGame')

let word = ''

rock.addEventListener('click', () => {
    disabledPointer()
    word = 'rock'
    rock.style.borderColor = 'teal'
    setTimeout(() => {
        winner(random(), word)
    }, 1000)
})

paper.addEventListener('click', () => {
    disabledPointer()
    word = 'paper'
    paper.style.borderColor = 'teal'
    setTimeout(() => {
        winner(random(), word)

    }, 1000)
})
scissor.addEventListener('click', () => {
    disabledPointer()
    word = 'scissor'
    scissor.style.borderColor = 'teal'
    setTimeout(() => {
        winner(random(), word)
    }, 1000)
})


function random() {
    const list = ['rock', 'paper', 'scissor']
    let random = Math.floor(Math.random() * 3)
    return list[random]
}



function winner(param, word) {
    let random = param
    if (random === 'rock') {
        rock.classList.add('apply-shake')
    }
    else if (random === 'paper') {
        paper.classList.add('apply-shake')
    }
    else if (random === 'scissor') {
        scissor.classList.add('apply-shake')
    }
    setTimeout(() => {
        if (word === param) {
            alert('DRAW NOONE WON')
            enabledPointer()
            removeShake()
            defaultColor()
        }
        else if (word === 'rock' && param === 'scissor' || word === 'paper' && param === 'rock' || word === 'scissor' && param === 'paper') {
            alert('YOU HAVE WON')
            score.innerHTML = (parseInt(score.innerHTML) + 1).toString()
            enabledPointer()
            removeShake()
            defaultColor()

        } else {
            alert('YOU LOSE TO A COMPUTER')
            enabledPointer()
            removeShake()
            defaultColor()
        }
    }, 1000)

}

function defaultColor() {
    rock.style.borderColor = '#D21312'
    paper.style.borderColor = '#270082'
    scissor.style.borderColor = '#FEC260'
}
function removeShake() {
    scissor.classList.remove('apply-shake')
    paper.classList.remove('apply-shake')
    rock.classList.remove('apply-shake')
}

function enabledPointer() {
    rock.style.pointerEvents = 'auto'
    scissor.style.pointerEvents = 'auto'
    paper.style.pointerEvents = 'auto'
}
function disabledPointer() {
    rock.style.pointerEvents = 'none'
    scissor.style.pointerEvents = 'none'
    paper.style.pointerEvents = 'none'
}
reset.addEventListener('click', () => {
    score.innerHTML = '0'
})




