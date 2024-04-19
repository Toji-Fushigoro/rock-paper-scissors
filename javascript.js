function Random(max){
  return Math.floor(Math.random()*max);
}

function getComputerChoice(){
  let CompChoice = Random(3);
  if (CompChoice === 0){
    return 'Rock';
  }else if (CompChoice === 1){
    return "Paper";
  }else{
    return "Scissors";
  }
}

function getUserinput(){
  let UserInput = prompt("Enter your choice(first letter uppercase):");
  return UserInput;
}

function Game(){
  let user = getUserinput();
  let computer = getComputerChoice();
  if (user === computer){
    console.log("It's a Draw!");
  }else if (user != computer){
    if (user === 'Rock' && computer == 'Scissors'){
      console.log("You Win! computer chose scissors!");
    } else if(user === 'Rock' && computer ==='Paper'){
      console.log("You Lose! computer chose paper!");
    } else if (user === "Scissor" && computer === 'Rock'){
      console.log('You Loose! computer chose rock!');
    } else if (user === "Scissor" && computer === "Paper"){
      console.log('You Win!Computer chose paper!');
    } else if (user === "Paper" && computer === "Rock"){
      console.log('You Win! computer chose rock!');
    }else if (user === "Paper" && computer === "Scissors"){
      console.log("You Loose! computer chose scissors");
    }
  }
}

console.log(Game())