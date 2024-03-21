turn = 0
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


for (i = 0; i < document.querySelectorAll('button').length; i++)
{
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        let press = this.className
        hasBeenClicked(press)
    })
}


let hasBeenClicked = (placement) => {
    this.placement = placement

    if(boardCoodinates[`${placement}`] === true){
        boardCoodinates[`${placement}`] = false;
        placePiece(placement)
    }
    else{
        console.log('already clicked')
    }

}

let placePiece = (placement) => {
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
    }
    let peice = document.querySelectorAll('button')[index]

    if (turn % 2 === 0){
        console.log('inside turn % 2 === 0')
        peice.innerHTML = "X"
        turn ++;
    }
    else{
        peice.innerHTML = 'O'
        turn ++
    }
}

