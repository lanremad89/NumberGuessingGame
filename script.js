/* the randomNumber variable is our placeholder variable for a 
automatic generated number*/
const randomNumber = Math.floor(Math.random() * 101)
    console.log('Random Number', randomNumber)

    function checkGuess() {
      let userGuess = guess.value
      if (userGuess === randomNumber) {
        feedback.textContent = "You got it right!"
      } else if (userGuess > randomNumber) {
        feedback.textContent = "Your guess was " + userGuess + ". That's too high. Try Again!"
      } else if (userGuess < randomNumber) {
       feedback.textContent = "Your guess was " + userGuess + ". That's too low. Try Again!"
     }
   }
   // when eventListner records the click event, it will then compare the number guessed to the randomNumber generated
   submitGuess.addEventListener('click', checkGuess)
   