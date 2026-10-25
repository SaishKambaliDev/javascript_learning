//rock paper scissor logic

function rps(user, computer)
{
    if(user === computer) return "Draw";

    if(user === 'rock' && computer === 'scissor') return "User";
    if(user === 'paper' && computer === 'rock') return "User";
    if(user === 'scissor' && computer === 'paper') return "User";

    return 'Computer';
}

console.log(rps('rock', 'rock'));