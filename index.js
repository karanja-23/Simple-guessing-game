const minNum = 1;
const maxNum = 10;
let ans = Math.floor(Math.random() * (maxNum - minNum + 1)); 

let myGuess = document.getElementById("my-guess");
let submit = document.getElementById("my-btn");
let myResponse = document.getElementById("response");
let attempts = 0;


submit.onclick = function(){

  let inputValue = myGuess.value;
  if(inputValue < minNum || inputValue > maxNum){
    window.alert(`Enter a valid number`)
    myGuess.value = "";
    location.reload();
  }

  else if(ans == inputValue){    
    myResponse.textContent = (`Correct! The answer is ${inputValue}`);
    
  }
  else if(inputValue < ans){
   myResponse.textContent = (`Too low! please guess again`);
    
  }
  else if(inputValue > ans){
    myResponse.textContent = (`Too high! please guess again`);
     
   }
}
