let btn = document.getElementById('startGame');

let hend;

btn.addEventListener('click', function () {
  function playerhend() {
    hend = prompt('choose Rock or Paper or Scissors');
    hend = hend.toLowerCase();
    console.log(hend);
    return hend;
  }

  playerhend();

  let randomHend;

  function RockPaperScissors() {
    randomHend = Math.floor(Math.random() * 3) + 1;
    // console.log(randomHend);

    if (randomHend === 1) {
      randomHend = 'Rock';
      // console.log(randomHend);
    } else if (randomHend === 2) {
      randomHend = 'Paper';
    } else if (randomHend === 3) {
      randomHend = 'Scissors';
    }
    return randomHend;
  }

  RockPaperScissors();

  // let pcHend = RockPaperScissors();

  // console.log(RockPaperScissors());

  function whowinner(hend, RockPaperScissors) {
    console.log(RockPaperScissors);

    if (
      (RockPaperScissors === 'Rock' && hend === 'scissors') ||
      (RockPaperScissors === 'Scissors' && hend === 'paper') ||
      (RockPaperScissors === 'Rock' && hend === 'paper')
    ) {
      alert('lose');
    } else if (
      (RockPaperScissors === 'Scissors' && hend === 'rock') ||
      (RockPaperScissors === 'Paper' && hend === 'scissors') ||
      (RockPaperScissors === 'Paper' && hend === 'rock')
    ) {
      alert('winner');
    } else if (
      (RockPaperScissors === 'Scissors' && hend === 'scissors') ||
      (RockPaperScissors === 'Paper' && hend === 'paper') ||
      (RockPaperScissors === 'Rock' && hend === 'rock')
    ) {
      alert('tie');
    } else {
      alert('give me only this words: rock, paper or scissors ');
    }
  }

  whowinner(hend, RockPaperScissors());
});
