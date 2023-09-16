let cells = document.querySelectorAll('.cells');
let turn = document.querySelector('.player-turn-display');
let btn = document.getElementsByTagName('button');
let winnerInfo = document.querySelector('.display-win-board');

btn[0].addEventListener('click', startGame);

let isPlayerNow = true;
let isStartVar = false;


let arrhorline1 = [];
let arrhorline2 = [];
let arrhorline3 = [];
let arrVerline1 = [];
let arrVerline2 = [];
let arrVerline3 = [];
let arrDialine1 = [];
let arrDialine2 = [];

  for (let x = 0; x < cells.length; x++){
      cells[x].addEventListener('click', () => {
            
          if(cells[x].innerHTML == ''){
          isStartVar ? ChangeCheckCurrentPlayer(x) : turn.innerHTML = 'you havent started the game';
          isStartVar ? turn.style.color = 'black' : turn.style.color = 'red';
              
           checkWinner(x, cells[x].innerHTML);
          }
          else {
              turn.innerHTML = `cell at index ${x} already has a value`
              turn.style.color = 'red'
          }
        })
  }


function startGame() {
    isStartVar = !isStartVar;
    isPlayerNow? turn.innerHTML =' your turn':turn.innerHTML = ' computers turn'
    turn.style.color = 'black';

    arrhorline1 = [];
    arrhorline2 = [];
    arrhorline3 = [];
    arrVerline1 = [];
    arrVerline2 = [];
    arrVerline3 = [];
    arrDialine1 = [];
    arrDialine2 = [];

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }

    btn[0].innerHTML = 'Restart'
}

function ChangeCheckCurrentPlayer(index) {
    if (isPlayerNow) {
        cells[index].innerHTML = 'o';
        turn.innerHTML = 'computers turn';
    }
    else {
        cells[index].innerHTML = 'x';
        turn.innerHTML = 'your turn';
    }

    isPlayerNow = !isPlayerNow;
}

function checkHorizontal(index,value) {
        
    let horiline1bool,horiline2bool,horiline3bool;

    if (index === 0 || index === 1 || index === 2) {
        arrhorline1.push(value);
        horiline1bool = checkHorline1(value);
    }
    
    if (arrhorline1.length === 3 && horiline1bool) {
        determineWinner(value);
    }

    if (index === 3 || index === 4 || index === 5) {
        arrhorline2.push(value);
        horiline2bool = checkHorline2(value);
    }
    
    if (arrhorline2.length === 3 && horiline2bool) {
         determineWinner(value);
    }

    if (index === 6 || index === 7 || index === 8) {
        arrhorline3.push(value);
        horiline3bool = checkHorline3(value);
    }
    
    if (arrhorline3.length === 3 && horiline3bool) {
       determineWinner(value);
    }

}

function checkVertical(index,value) {
         
    let verline1bool,verline2bool,verline3bool;

    if (index === 0 || index === 3 || index === 6) {
        arrVerline1.push(value);
        verline1bool = checkverline1(value);
    }
    
    if (arrVerline1.length === 3 && verline1bool) {
       determineWinner(value);
    }

    if (index === 1 || index === 4 || index === 7) {
        arrVerline2.push(value);
        verline2bool = checkverline2(value);
    }
    
    if (arrVerline2.length === 3 && verline2bool) {
        determineWinner(value);
    }

    if (index === 2 || index === 5 || index === 8) {
        arrVerline3.push(value);
        verline3bool = checkverline3(value);
    }
    
    if (arrVerline3.length === 3 && verline3bool) {
        determineWinner(value);
    }
}

function checkDiagonal(index,value) {
         let dialine1bool,dialine2bool;

    if (index === 2 || index === 4 || index === 6) {
        arrDialine1.push(value);
        dialine1bool = checkdialine1(value);
    }
    
    if (arrDialine1.length === 3 && dialine1bool) {
         determineWinner(value);
    }

    if (index === 0 || index === 4 || index === 8) {
        arrDialine2.push(value);
        dialine2bool = checkdialine2(value);
    }
    
    if (arrDialine2.length === 3 && dialine2bool) {
        determineWinner(value);
    }
}

function checkWinner(index,value) {
    checkHorizontal(index,value);
    checkVertical(index,value);
    checkDiagonal(index,value);
}

//horizontal

let checkHorline1 = (value) => {
    let horline1Bool = arrhorline1.every((item) => {
        return item === value;
    })

    return horline1Bool;
}
let checkHorline2 = (value) => {
    let horline2Bool = arrhorline2.every((item) => {
        return item === value;
    })

    return horline2Bool;
}
let checkHorline3 = (value) => {
    let horline3Bool = arrhorline3.every((item) => {
        return item === value;
    })

    return horline3Bool;
}

//vertical
let checkverline1 = (value) => {
    let verline1Bool = arrVerline1.every((item) => {
        return item === value;
    })

    return verline1Bool;
}
let checkverline2 = (value) => {
    let verline2Bool = arrVerline2.every((item) => {
        return item === value;
    })

    return verline2Bool;
}
let checkverline3 = (value) => {
    let verline3Bool = arrVerline3.every((item) => {
        return item === value;
    })

    return verline3Bool;
}

//diagonal

let checkdialine1 = (value) => {
    let dialine1Bool = arrDialine1.every((item) => {
        return item === value;
    })

    return dialine1Bool;
}
let checkdialine2 = (value) => {
    let dialine2Bool = arrDialine2.every((item) => {
        return item === value;
    })

    return dialine2Bool;
}

function determineWinner(value) {
    value === 'x' ? turn.innerHTML = 'you lost':turn.innerHTML = 'you won';
    value === 'x' ? turn.style.color = 'red' : turn.style.color = 'green';
    
    isStartVar = false;
}


let arrStr = ['', '', '', '', '', '','','',''];

let mdIndex = [];

function trackModifiedIndex() {
    arrStr.forEach((item, index) => {
        if (item !== '') {
            mdIndex.push(index);
        }
    })
}

function modifyElement() {
    let ranValue = getradomNumber();
    if (mdIndex.includes(ranValue)) {
        modifyElement();
    } else {
        arrStr[ranValue] = 'x';
    }
    mdIndex.push(ranValue);
}

function getradomNumber() {
        return Math.floor(Math.random() * 9);
}

function modifyArrStr() {
    trackModifiedIndex();
    modifyElement()

}

