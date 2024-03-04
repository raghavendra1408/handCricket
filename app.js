let userRuns = 0;
let balls = 0;

let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let choices = document.querySelectorAll(".choice");
let userRunsPara = document.querySelector("#userScore");
let ballsPara = document.querySelector("#balls");
let targetPara = document.querySelector("#target");

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let target = getRandomArbitrary(50 , 100);

const genCompChoice = () => {
    const options = [1, 2, 3, 4, 5, 6];
    const randIdx = Math.floor(Math.random() * 6);
    return options[randIdx];
}

const out = () => {
    userRuns = 0;
    balls = 0;
    target = 0;
    userRunsPara.innerText = userRuns;
    ballsPara.innerText = balls;
    targetPara.innerText = target;
    msg2.innerText = "You've Lost."
    msg2.style.backgroundColor = "red";
    compSeries++;
}

const showRuns = (userRuns,balls) => {
    userRunsPara.innerText = userRuns;
    ballsPara.innerText = balls;
    targetPara.innerText = target;
}

const msgChanger = (userChoice) => {
    if(userChoice == "1"){
        msg.innerText = "Taken a Single"
        msg.style.backgroundColor = "#344955";
    }else if(userChoice == "2"){
        msg.innerText = "Good Running 2 runs taken"
        msg.style.backgroundColor = "#344955";
    }
    else if(userChoice == "3"){
        msg.innerText = "3 runs taken Exceptional Running"
        msg.style.backgroundColor = "#344955";
    }
    else if(userChoice == "4"){
        msg.innerText = "What a Shot Into the gap for 4 runs"
        msg.style.backgroundColor = "green";
    }
    else if(userChoice == "5"){
        msg.innerText = "Overthrows there 5 runs given"
        msg.style.backgroundColor = "orange";
    }
    else{
        msg.innerText = "It's a Maximum out of the park"
        msg.style.backgroundColor = "green";
    }
    if(userRuns >= "50" && userRuns <= "100"){
        msg2.innerText = "50 for the batsman. Really well Played"
        msg2.style.backgroundColor = "#344955";
    }
    else if(userRuns >= "100"){
        msg2.innerText = "100 for the batsman. Magnificient Innings"
        msg2.style.backgroundColor = "#344955";
    }
    if(userRuns >= target){
        msg2.innerText = "You have Won!!"
        msg2.style.backgroundColor = "green";
    }
}


const playGame = (userChoice) => {
    
    balls++;
    const compChoice = genCompChoice();
    if(userChoice == compChoice){
        out();
    }else{
        if(userChoice == "1" || userChoice == "2" || userChoice == "3" || userChoice == "4" || userChoice == "5" || userChoice == "6"){

            parseInt(userRuns);
            userRuns += userChoice;
            
        }
        showRuns(userRuns,balls);
        msgChanger(userChoice);
    }
}

choices.forEach((choice) => {
    const userChoice = parseInt(choice.getAttribute("id"));
    choice.addEventListener("click",()=>{
        playGame(userChoice);
    });
});