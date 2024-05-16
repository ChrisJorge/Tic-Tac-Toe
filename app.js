// Declare necessary variables
let optionsContainer = document.querySelector('.optionsMasterContainer')  
let gameContainer = document.querySelector('.gameContainer')
let title = document.querySelector('.title')
let restartbtn = document.querySelectorAll('.button')[1]
let changeplayersbtn = document.querySelectorAll('.button')[0]
let turn = 0
let players = 0
let won = false
let board = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
}

// Create functions 

// Function to make the options container dissapear and the game board appear
const start = () => {
    restartbtn.setAttribute('style', 'display: inline-block')
    restartbtn.addEventListener('click', (() => {
                announcement("X's Turn")
                restart()
    }))
    changeplayersbtn.setAttribute('style', 'display: inline-block')
    changeplayersbtn.addEventListener('click', (() => {
        window.location.reload()
    }))
    optionsContainer.setAttribute('style', 'display: none')
    gameContainer.setAttribute('style', 'display: flex')
    activateSpaces()
}

// Function for activating the board spaces
const activateSpaces = () => {
    for(let i = 0; i < document.querySelectorAll('.btn').length; i++)
        {
            document.querySelectorAll('.btn')[i].addEventListener('click', (event) => {
              let num = event.target.id
              position(num)
            })
        }
        announcement("X's turn")
}

// Function to determine position
const position = (num) => {
    let index = -1
    switch(num)
    {
        case '1':
            index = 0;
            break;
        case '2':
            index = 1;
            break;
        case '3':
            index = 2;
            break;
        case '4':
            index = 3;
            break;
        case '5':
            index = 4;
            break;
        case '6':
            index = 5;
            break;
        case '7':
            index = 6;
            break;
        case '8':
            index = 7;
            break;
        case '9':
            index = 8;
            break;
        default:
            break;
    }
    place(index)
}
// function to place piece
const place = (i) => {
    let spot = document.querySelectorAll('.btn')[i]
    if(turn % 2 == 0)
        {
            spot.innerHTML = "X"
            board[`${i + 1}`] = "X"
            spot.disabled = true
            announcement("O's Turn")
            turn ++;
        }
    else{
        spot.innerHTML = 'O'
        board[`${i + 1}`] = "O"
        announcement("X's Turn")
        spot.disabled = true
        turn ++
    }

    winCheck()
    if(players === 'one' && turn % 2 != 0 && turn < 8)
        {
            robotChoice()
        }
    
}


// Function for computer to pick a spot if one player is selected
const robotChoice = () => {
    let picked = false
    while (!picked)
        {
            let index = Math.floor(Math.random() * 9)
            spot = document.querySelectorAll('.btn')[index]
            if(spot.disabled != true)
                {
                    picked = true
                    place(index)
                }
        }
}

// Function checking for a win
const winCheck = () => {
    console.log(board[1])
    console.log(board[2])
    if (board[1] === board[2] && board[1] === board[3])
        {
            announcement(`${board['1']} wins`);
            won = true;
        }
        else if(board['4'] === board['5'] && board['4'] === board['6'])
        {
            announcement(`${board['4']} wins`);
            won = true;
        }
        else if(board['7'] === board['8'] && board['7'] === board['9'])
        {
            announcement(`${board['7']} wins`);
            won = true;
        }
        else if(board['1'] === board['5'] && board['1'] === board['9'])
        {
            announcement(`${board['1']} wins`);
            won = true;
        }
        else if(board['3'] === board['5'] && board['3'] === board['7'])
        {
            announcement(`${board['3']} wins`);
            won = true;
        }
        else if(board['1'] === board['4'] && board['1'] === board['7'])
        {
            announcement(`${board['1']} wins`);
            won = true;
        }
        else if(board['2'] === board['5'] && board['2'] === board['8'])
        {
            announcement(`${board['2']} wins`);
            won = true;
        }
        else if(board['3'] === board['6'] && board['3'] === board['9'])
        {
            announcement(`${board['3']} wins`);
            won = true;
        }

        if (won !== true && turn > 8)
        {
            announcement('Tie')
            for(i = 0; i < document.querySelectorAll('.btn').length; i++)
                {
                    let btn = document.querySelectorAll('.btn')[i]
                    btn.disabled = true
                }
            placeButtons()
        }
        else if (won === true)
            {
                for(i = 0; i < document.querySelectorAll('.btn').length; i++)
                    {
                        let btn = document.querySelectorAll('.btn')[i]
                        btn.disabled = true
                    }
                placeButtons()
            }
}

const restart = () => {
    board = {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
        }
    turn = 0
    won = false
    for(i = 0; i < document.querySelectorAll('.btn').length; i++)
        {
            let btn = document.querySelectorAll('.btn')[i]
            btn.innerHTML = ''
            btn.disabled = false
        }
}


// Function to update title
const announcement = (message) => 
    {
        title.innerHTML = message
    }


for(let i = 0; i < document.querySelectorAll('.choice').length; i++)
    {
        document.querySelectorAll('.choice')[i].addEventListener('click', (event) => {
             players = event.target.id
            start()
        })
    }