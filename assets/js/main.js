// ESERCIZIO MAIL

// mail autorizzate
const mailAuthorized = [
    'luca@gmail.com',
    'matteo@gmail.com',
    'paolo@gmail.com',
    'enrico@gmail.com',
    'federica@gmail.com'
  ];
// selezionare gli elementi dal DOM
const buttonEL = document.querySelector('button');

const mailEl = document.getElementById('mail');

// aggiungo evento al click

buttonEL.addEventListener('click', function() {

  const mail = mailEl.value;

  console.log(mail)

  if (!mailAuthorized.includes(mail)) {

    alert('This e-mail is not authorized')
    
  }

})



// ESERCIZIO DADI


// Generare un numero casuale da 1 a 6 per il giocatore e per il computer
const playerScore = Math.floor(Math.random() * 6) + 1;
const computerScore = Math.floor(Math.random() * 6) + 1;

// selezionare gli elementi dal DOM

const startGameButton = document.getElementById('start_game_button');


// aggiungo evento al click

startGameButton.addEventListener('click', function() {


    const playerScore = Math.floor(Math.random() * 6) + 1;
    const computerScore = Math.floor(Math.random() * 6) + 1;
    const gameWinner = document.getElementById("game_results")
    let resultMessage;

    if (playerScore > computerScore) {
        
      resultMessage = ('You win! Your score is ' + playerScore + ', while computer\'s score is ' + computerScore + '.');
    } else if (playerScore < computerScore) {
        resultMessage = ('You lost! Your score is ' + playerScore + ', while computer\'s score is ' + computerScore + '.');
    } else {
        resultMessage = ('It\'s a tie... Your score is ' + playerScore + ', while computer\'s score is ' + computerScore + '.');
    }
    gameWinner.textContent = resultMessage;
  });
