// create a game wherE YOU START WITH A RANDOM game number. ask the user to keep gurssing the number until the user enters the correct value.

let gamenum = 17;

let usernum = prompt("Guess a number: ");

while(gamenum != usernum){
    usernum = prompt("youve entered the wrong number. guess again")
}

console.log("congratulations! you've cleared the game")