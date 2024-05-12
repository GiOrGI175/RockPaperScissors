let btn = document.getElementById('startGame');

let hend;

function handdd() {
  hend = prompt('choose Rock or Paper or Scissors');
  hend.toLowerCase();
  return hend;
}

btn.addEventListener('click', function () {
  // hend = prompt('choose Rock or Paper or Scissors');
  // hend.toLowerCase();
  // return hend;
  handdd();
});

console.log(handdd());

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
    (RockPaperScissors === 'Rock' && hend === 'Paper') ||
    hend === 'Scissors'
  ) {
    alert('lose');
  }
}

whowinner(hend, RockPaperScissors());
