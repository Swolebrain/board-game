import generateBoard from './generateBoard.js';
import Player from './Player.js';

generateBoard();
//CREATE PLAYER
window.players = [
  new Player(document.getElementById('player1'), 'Stimpy'),
    new Player(document.getElementById('player2'), 'Ren')
  ];


/*
  Click handler for die roll
*/
let turn = 0;
function handleClick(e){
  e.target.onclick = "";
  e.target.src = 'Dodecahedron3.gif';
  let roll = document.getElementById('roll');
  roll.innerHTML = "";
  setTimeout(function(){
    e.target.onclick = handleClick;
    let numSquares = Math.floor(Math.random()*12)+1;
    roll.innerHTML = numSquares;
    e.target.src='dodecahedron_360.png';
    players[ turn++ % players.length].moveSquares(numSquares);
  }, 1900);
}

document.getElementById('die').onclick= handleClick;
