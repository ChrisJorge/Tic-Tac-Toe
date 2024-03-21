for (i = 0; i < document.querySelectorAll('button').length; i++)
{
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        let press = this.className
        console.log(press)
        hasBeenClicked(press)
    })
}

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

let hasBeenClicked = (placement) => {
    this.placement = placement

    if(boardCoodinates[`${placement}`] === true){
        boardCoodinates[`${placement}`] = false;
    }
    else{
        console.log('already clicked')
    }

}