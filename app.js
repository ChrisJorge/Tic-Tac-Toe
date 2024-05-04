
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

let announcement = document.querySelector('.title');
for (i = 0; i < document.querySelectorAll('button').length; i++)
{
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        let press = this.id
        console.log(press)
        hasBeenClicked(press)
    })
}

const hasBeenClicked = (placement) => {
    this.placement = placement

    if(boardCoodinates[`${placement}`] === true){
        boardCoodinates[`${placement}`] = false;
        placePiece(placement)
    }
    else{
        alert('Space already clicked, choose another one')
    }

}

const placePiece = (placement) => {
    this.placement = placement
    let index = 0

    switch (placement){
        case 'one':
            index = 0;
            break;
        case 'two':
            index = 1;
            break;
        case 'three':
            index = 2;
            break;
        case 'four':
            index = 3;
            break;
        case 'five':
            index = 4;
            break;
        case 'six':
            index = 5;
            break;
        case 'seven':
            index = 6;
            break;
        case 'eight':
            index = 7;
            break;
        case 'nine':
            index = 8;
            break;
        default:
            console.log(`${placement}?`)
            break;
    }
    
    let peice = document.querySelectorAll('button')[index]

    if (turn % 2 === 0){
        console.log('inside turn % 2 === 0')
        peice.innerHTML = "X"
        winCondition[`${placement}`] = 'X'
        turn ++;
        winCheck();
    }
    else{
        peice.innerHTML = 'O'
        winCondition[`${placement}`] = 'O'
        turn ++
        winCheck();
    }
}

const winCheck =() => {

    if (winCondition['one'] === winCondition['two'] && winCondition['one'] === winCondition['three'])
    {
        announcement.innerHTML = `${winCondition['one']} wins!`
        won = true;
    }
    else if(winCondition['four'] === winCondition['five'] && winCondition['four'] === winCondition['six'])
    {
        announcement.innerHTML = `${winCondition['four']} wins!`
        won = true;
    }
    else if(winCondition['seven'] === winCondition['eight'] && winCondition['seven'] === winCondition['nine'])
    {
        announcement.innerHTML = `${winCondition['seven']} wins!`
        won = true;
    }
    else if(winCondition['one'] === winCondition['five'] && winCondition['one'] === winCondition['nine'])
    {
        announcement.innerHTML = `${winCondition['one']} wins!`
        won = true;
    }
    else if(winCondition['three'] === winCondition['five'] && winCondition['three'] === winCondition['seven'])
    {
        announcement.innerHTML = `${winCondition['three']} wins!`
        won = true;
    }
    else if(winCondition['one'] === winCondition['four'] && winCondition['one'] === winCondition['seven'])
    {
        announcement.innerHTML = `${winCondition['one']} wins!`
        won = true;
    }
    else if(winCondition['two'] === winCondition['five'] && winCondition['two'] === winCondition['eight'])
    {
        announcement.innerHTML = `${winCondition['two']} wins!`
        won = true;
    }
    else if(winCondition['three'] === winCondition['six'] && winCondition['three'] === winCondition['nine'])
    {
        announcement.innerHTML = `${winCondition['three']} wins!`
        won = true;
    }

    if (won !== true && turn > 8){
        alert('Tie')
        disabled()
        let container = document.querySelector('h1');
        btn = document.createElement('button');
        btn.setAttribute('class', 'show-btn');
        btn.setAttribute('onClick', 'reset()');
        btn.textContent = "Replay"
        container.appendChild(btn);
        
    }
    else if(won === true){
        disabled()
        let container = document.querySelector('h1');
        btn = document.createElement('button');
        btn.setAttribute('class', 'show-btn');
        btn.setAttribute('onClick', 'reset()');
        btn.textContent = "Replay"
        container.appendChild(btn);
        
    }  
}

const disabled = () => {
    for(i = 0; i < document.querySelectorAll('btn').length; i++){
        let btn = document.querySelectorAll('btn')[i]
        btn.disabled = true
    }
}

const reset = () => {
    window.location.reload()
}