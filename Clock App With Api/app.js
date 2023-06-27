const btn = document.querySelector('#second-section .more div button')
const bgThird = document.querySelector('#bg-third')
const btnvalue = document.querySelector('#second-section .more div span')
const time = document.querySelector('#second-section .display h1')
const greet = document.querySelector('#second-section .display h3')
const loc = document.querySelector('#second-section .display h2')
const zone = document.querySelector('#third-section .st h1')
const week = document.querySelector('#third-section .nd h1')
const year = document.querySelector('#third-section .rd h1')
const weakNum = document.querySelector('#third-section .th h1')
// two api's
const passInfo = async () => {
    const data = await axios.get("https://ipinfo.io/json?token=97d9edea13bec3");
    const response = await axios.get(`http://worldtimeapi.org/api/timezone/${data.data.timezone}`)
    console.log(response)
    return response
}

async function implement() {
    try {
        const data = await passInfo()
        const timeResult = data.data.datetime.slice(11, 16)
        loc.innerHTML = `IN ${locate(data.data.timezone)}`
        time.innerHTML = tConv24(timeResult);
        zone.innerHTML = data.data.timezone
        week.innerHTML = data.data.day_of_week
        year.innerHTML = data.data.day_of_year
        weakNum.innerHTML = data.data.week_number

        dealWithSeasons(timeResult)

    }
    catch (e) {
        location.reload();
        console.log("Error")
    }
}
implement();
btn.addEventListener('click', hide)
// window.addEventListener('mousedown',)

function hide() {
    if (bgThird.classList.contains('newThirdSection')) {
        btnvalue.innerHTML = 'LESS'
        btn.style.transform = 'rotate(180deg)'
        bgThird.classList.remove('newThirdSection')

    } else {
        btnvalue.innerHTML = 'MORE'
        btn.style.transform = 'rotate(0deg)'
        bgThird.classList.add('newThirdSection')
    }
}

function dealWithSeasons(timeResult) {
    const time = parseInt(timeResult.slice(0, 2))
    if (12 < time) {
        greet.innerHTML = `🌑 GOOD EVENING, IT'S CURRENTLY`
        document.body.style.background = "url('https://images.unsplash.com/photo-1509226704106-8a5a71ffbfa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed'
        bgThird.style.color = 'white'
        bgThird.style.backgroundColor = "rgba(0, 0, 0, 0.7)"


    } else {
        greet.innerHTML = `🔆 GOOD MORNING, IT'S CURRENTLY`
        document.body.style.background = "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')"
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed'
        bgThird.style.color = 'black'
        bgThird.style.backgroundColor = "rgba(255, 255, 255, 0.7)"

    }
}

function locate(data) {
    let num = 0
    for (let i = 0; i < data.length; i++) {
        num++
        if (data[i] === '/') {
            return data.slice(num).toUpperCase()

        }
    }
}


function tConv24(time24) {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    h = (h < 10) ? ("0" + h) : h;  // leading 0 at the left for 1 digit hours
    ts = h + ts.substr(2, 3);
    return ts;
};
