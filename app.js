const submitBtn = document.querySelector('#submit-btn'),
  guess = document.querySelector('#guess'),
  lowerNum = document.querySelector('.lower-num'),
  upperNum = document.querySelector('.upper-num'),
  won = document.querySelector('.won'),
  lost = document.querySelector('.lost'),
  infoMsg = document.querySelector('.info-msg');

guess.autofocus = 'true';
lowerNum.textContent = '1';
upperNum.textContent = '9';
let guessCount = 3;

// function that returns random number between 1 and 9.
function getRandomNumber(lower, upper) {
  lower = parseInt(lower);
  upper = parseInt(upper);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// Calling getRandomNumber function by passing the lower number and upper number.
const randomNumber = getRandomNumber(lowerNum.textContent, upperNum.textContent);

// for the creater to secretly see the random number in the console. It's just for testing things up.
console.log(randomNumber);

// Checking...
submitBtn.addEventListener('click', function () {
  if (isNaN(parseInt(guess.value))) {
    infoMsg.style.display = 'block';
    infoMsg.textContent = 'Please enter a number.';
    infoMsg.style.color = '#d9534f';
    guess.style.border = '1px solid #d9534f';
  } else {
    if (parseInt(guess.value) === randomNumber) {
      infoMsg.style.display = 'none';
      won.style.display = 'flex';
      guess.style.border = '1px solid #5cb85c';
      guess.disabled = 'true';
      submitBtn.innerHTML = `Play Again?<i class="fas fa-play"></i>`;
      guess.placeholder = 'Congratulations!';
    } else {
      guessCount--;
      infoMsg.style.display = 'block';
      infoMsg.style.color = '#f9f9f9';
      guess.style.border = 'none';
      infoMsg.textContent = `${guess.value} is not correct, you have ${guessCount} guess(es) left.`
      if (guessCount === 0) {
        infoMsg.style.display = 'none';
        lost.style.display = 'flex';
        guess.style.border = '1px solid #d9534f';
        guess.disabled = 'true';
        submitBtn.innerHTML = `Play Again?<i class="fas fa-play"></i>`;
        guess.placeholder = 'Sorry!';
      }
    }
    if (submitBtn.firstChild.textContent === 'Play Again?') {
      submitBtn.addEventListener('mousedown', function () {
        window.location.href = window.location.href;;
      });
    }
  }
  // clear guess
  guess.value = '';
});

