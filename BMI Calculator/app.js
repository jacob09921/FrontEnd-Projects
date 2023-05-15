const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const result = document.querySelector('#result')
const bmi = document.querySelector('#bmi')
const form = document.querySelector('#forms')
let order = 0

window.addEventListener('keyup', metrics) // it implements the function everytime
form.addEventListener('change', () => {
    if (order === 0) {
        order = 1
        height.setAttribute('placeholder', "inches") // changing the placeholder to be more informative
        weight.setAttribute('placeholder', "pounds") // changing the placeholder to be more informative
        metrics()
    } else {
        order = 0
        height.setAttribute('placeholder', "cm") // changing the placeholder to be more informative
        weight.setAttribute('placeholder', "kg") // changing the placeholder to be more informative
        metrics()
    }
})


function metrics() { // handle the display of the result
    setTimeout(() => {
        if (height.value.length === 0 || weight.value.length === 0) {
            bmi.innerHTML = "Welcome!"
            result.innerHTML = "Enter your height and weight and you'll see your BMI result here"
        } else if (height.value.length === 0 && weight.value.length === 0) {
            bmi.innerHTML = "Welcome!"
            result.innerHTML = "Enter your height and weight and you'll see your BMI result here"
        }
        else {
            bmi.innerHTML = "Your BMI is ..."
            operation()  // it solves the mathematically result on the data input and also check if it's imperial or metric 
        }
    }, 100)
}


function operation() {
    if (order === 0) {
        let num = parseFloat(((parseFloat(weight.value) / parseFloat(height.value) / parseFloat(height.value)) * 10000).toFixed(2))
        call(num) // calling the math result
    } else if (order === 1) {
        let num = parseFloat(((parseFloat(weight.value) / parseFloat(height.value) / parseFloat(height.value)) * 703).toFixed(2))
        call(num)
    }
}



function call(num) {
    if (isFinite(num)) { // handle infinity bmi
        if (num > 0 && num < 18.5) {
            result.innerHTML = `${num}: you are literally underweight`
        } else if (18.5 <= num && num < 24.9) { // 
            result.innerHTML = `${num}: you are in a normal state which is healthy`
        } else if (25 <= num && 29.9 > num) {
            result.innerHTML = `${num}: you are an overweight`
        } else if (30 <= num) {
            result.innerHTML = `${num}: you are an obese. Get some help from medical clinic`
        }
        else { // if its zero
            bmi.innerHTML = "Welcome!"
            result.innerHTML = "Enter your height and weight and you'll see your BMI result here"
        }
    }
    else { // if its infinity
        bmi.innerHTML = "Welcome!"
        result.innerHTML = "Enter your height and weight and you'll see your BMI result here"
    }
}