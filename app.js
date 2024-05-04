let title = document.querySelector('.title')
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

for (i = 0; i < document.querySelectorAll('button').length; i++)
{
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        let press = this.id
        console.log(press)
        hasBeenClicked(press)
    })
}

const announcement = (message) => 
    {
        title.innerHTML = message
    }


const hasBeenClicked = (placement) => {
    this.placement = placement

    if(boardCoodinates[`${placement}`] === true){
        boardCoodinates[`${placement}`] = false;
        placePiece(placement)
    }
    else{
        announcement('Space already clicked, choose another one')
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
        peice.innerHTML = "X"
        winCondition[`${placement}`] = 'X'
        turn ++;
        announcement("O's Turn")
        winCheck();
    }
    else{
        peice.innerHTML = 'O'
        winCondition[`${placement}`] = 'O'
        turn ++
        announcement("X's Turn")
        winCheck();
    }
}

const winCheck =() => {

    if (winCondition['one'] === winCondition['two'] && winCondition['one'] === winCondition['three'])
    {
        announcement(`${winCondition['one']} wins`);
        won = true;
    }
    else if(winCondition['four'] === winCondition['five'] && winCondition['four'] === winCondition['six'])
    {
        announcement(`${winCondition['four']} wins`);
        won = true;
    }
    else if(winCondition['seven'] === winCondition['eight'] && winCondition['seven'] === winCondition['nine'])
    {
        announcement(`${winCondition['seven']} wins`);
        won = true;
    }
    else if(winCondition['one'] === winCondition['five'] && winCondition['one'] === winCondition['nine'])
    {
        announcement(`${winCondition['one']} wins`);
        won = true;
    }
    else if(winCondition['three'] === winCondition['five'] && winCondition['three'] === winCondition['seven'])
    {
        announcement(`${winCondition['three']} wins`);
        won = true;
    }
    else if(winCondition['one'] === winCondition['four'] && winCondition['one'] === winCondition['seven'])
    {
        announcement(`${winCondition['one']} wins`);
        won = true;
    }
    else if(winCondition['two'] === winCondition['five'] && winCondition['two'] === winCondition['eight'])
    {
        announcement(`${winCondition['two']} wins`);
        won = true;
    }
    else if(winCondition['three'] === winCondition['six'] && winCondition['three'] === winCondition['nine'])
    {
        announcement(`${winCondition['three']} wins`);
        won = true;
    }

    if (won !== true && turn > 8){
        announcement('Tie')
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