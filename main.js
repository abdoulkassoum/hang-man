
//aray des data
nomScientisf = [
	"einstein",
	"galilee",
	"aristote",
	"tesla",
	"pascal",
	"watt",
	"kirchhoff",
	"archimede",
	"newton",
	"ohm",
	"joule",
	"ampere",
	"boole"
]
//variable
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//fonction qui donne les nom des cientifique aléatoirement
function randomWord() {
  answer = nomScientisf[Math.floor(Math.random() * nomScientisf.length)];
}

//gnr btn
function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}



function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

//img ++
function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

// fonction de verif vict 1
function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}
//fonction de verif vict 0
function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

// maj erreur
function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

// reset
function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();

































































  // 	"Albert Einstein",
  // 	"Galilée",
  // 	"Aristote",
  // 	" Vinci",
  // 	" Pascal",
  // 	" Pascal",
  // 	"socrate",
  // 	"platon",
  // 	"Archimede",
  // 	"Newton",
  // 	"Epicure",
  // 	"Descartes",
  // 	"Algebre",
  // 	"boole"
  // ]
  
  
  // let rponse = '';
  // let maxWrong = 6;
  // let erreur = 0;
  // let devine = [];
  // let wordstatus = null;
  
  
  // function randomwrd() {
  //  rponse = nomCient[Math.floor(Math.random() * nomCient.length)];
  
  // }
  // function generatbtn(){
  //   let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
  //     `
  //     <button
  //     class="btn btn-lg btn-primary m-2 "
  //     id=' ` + letter + ` '
  //     onClick="deviner('`+ letter + `')"
  //     >
  //      `+ letter +  `
  
  //     </button>
  //     `).join('');
  // document.getElementById("keyboard").innerHTML = buttonsHTML;
  
  // }
  
  // function deviner(chosenLetter) {
  //   devine.indexOf(chosenLetter) === -1 ? devine.push(chosenLetter) : null;
  //    document.getElementById(chosenLetter).setAttribute('disabled', true);
  //    alert(rponse);
  //    if(rponse.indexOf(chosenLetter) >= 0) {
  //     guessedWord();
  //    }
  // }
  // document.getElementById('maxWrong').innerHTML = maxWrong;
  // function guessedWord(){
  //   wordstatus = rponse.split('').map(letter => (devine.indexOf(letter) >= 0 ? letter : "_")).join('');
  
  //   document.getElementById('wordSpotlight').innerHTML = wordstatus;
  // }
  // document.getElementById('maxWrong').innerHTML = maxWrong;
  
  
  // randomwrd();
  // generatbtn();
  // guessedWord();
  
  