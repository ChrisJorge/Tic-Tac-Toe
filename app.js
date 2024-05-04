let turn = 0
let won = false
let boardCoodinates = {
    one: true,
    two: true,
    three: true,
    four: true,
    five: true,
    six: true,
    seven: true,
    eight: true,
    nine: true
}

let winCondition = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9"
}

let playing = 0
const single = () => {
    playing = 1
    start()
}

const double = () => {
    playing = 2
    start()
}

const start = () => {
    $('.options').css('display', 'none')
    $('.game').css('display', 'block')
    dissapear.setAttribute('display', 'none')
}