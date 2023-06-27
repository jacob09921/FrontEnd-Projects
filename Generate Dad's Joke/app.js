const btn = document.querySelector('.container button') // gets the button element
const result = document.querySelector('.container p') // gets the paragraph element


const passDadJoke = async () => { // to initiate json and api
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config) // link is in the hmtl page
    return res.data.joke
}

const implement = async () => { // implementing api
    const data = await passDadJoke();// has return data
    result.innerHTML = `"${data}"`
}



btn.addEventListener('click', implement) // when button clicks, it does the function 

console.log("Hello", 21)

const arr = [1, 2, 3]

arr.sing = function () { // prototypes
    console.log("Hello Koni")
}
arr[4] = "Hello"

String.prototype.yell = function () { // it does not work on arrow function 
    alert(this)
}

// new Key Word