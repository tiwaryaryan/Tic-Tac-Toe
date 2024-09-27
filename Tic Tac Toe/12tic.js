// let boxes = document.querySelectorAll(".box");
// let bg = document.querySelector(".bg");
// let restbtn = document.querySelector("#play");
// let msg = document.querySelector("#result")

// let cnt=0;
// let turn = 0;
// let gameover = 0;

// const winPattern = [
//     [0 , 1 ,2],
//     [0 , 3 ,6],
//     [0 , 4 ,8],
//     [1 , 4 ,7],
//     [2 , 5 ,8],
//     [2 , 4 ,6],
//     [3 , 4 ,5],
//     [6 , 7 ,8],
// ];


// boxes.forEach((boxi) => {
//     boxi.addEventListener("click" , () =>{
//         if(boxi.innerText==""){
//             if(turn){
//                 boxi.innerText = "O";
//                 turn = 0;
//                 bg.style.left="0px";
//             }
//             else{
//                 boxi.innerText = "X";
//                 turn = 1; 
//                 bg.style.left="85px";
//             }
        
        
//         cnt++;
//         boxi.disabled = true;
//         checkwinner();
//         checkdraw();
//         if(gameover == 1){
//             boxi
//         }

//         }

//     });
// });

// const checkwinner = () => {

//     for(let pattern of winPattern){
//         let pos1=boxes[pattern[0]].innerText;
//         let pos2=boxes[pattern[1]].innerText;
//         let pos3=boxes[pattern[2]].innerText;
        
//         if(pos1 != "" && pos1==pos2 && pos2==pos3){
//                 gameover=1;
//                 winwin(pos1 , pattern);
//                 disablebox();
//                 boxes.classList.remove("box:hover");
//                 //not working
//         }
//     }
// }

// const winwin = (pos1 , pattern) =>{
//     console.log(pos1 ,"is winner");
//     msg.innerText = pos1 + " is winner!";
//     restbtn.innerText = "Play again!";
//     restbtn.style.backgroundColor="#08d9d6";
//     restbtn.style.color="black";
//     for(let i = 0 ; i< 3 ; i++){
//         boxes[pattern[i]].classList.add("green");
//         boxes[pattern[i]].style.color = "black";
//     }
// }

// const checkdraw = () =>{
//     if(cnt==9 && gameover==0){
//         gameover=1;
//         msg.innerText = "Draw!";
//         restbtn.innerText = "Play again!";
//         restbtn.style.backgroundColor="#08d9d6";
//         restbtn.style.color="black";
//     }
// }

// const disablebox = () => {
//     for(let box of boxes){
//         box.disabled = true;
//     }
//     restbtn.innerText = "Play again!";
// }

// const enablebox = () => {
//     for(let box of boxes){
//         box.innerText="";
//         box.disabled = false; 
//         box.style.color="white";
//     }
//     restbtn.innerText="Reset";
//     restbtn.style.backgroundColor="#FF2E63";
// }

// const resett = () => {
//     turn = 0;
//     enablebox();
//     msg.innerText="";
//     bg.style.left="0px";
//     boxes.forEach(e => {
//         e.classList.remove("green");
//     })
// }

// restbtn.addEventListener("click" , resett);


let boxes = document.querySelectorAll(".box");
let bg = document.querySelector(".bg");
let restbtn = document.querySelector("#play");
let msg = document.querySelector("#result");
let music = new Audio("music.mp3");
let turnmusic = new Audio("ting.mp3");
let gameovermusic = new Audio("gameover.mp3");

let cnt = 0;
let turn = 0;
let gameover = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((boxi) => {
    boxi.addEventListener("click", () => {
        if (boxi.innerText == "" && gameover == 0) {  // Add condition to check if game is over
            if (turn) {
                boxi.innerText = "O";
                turn = 0;
                bg.style.left = "0px";
                turnmusic.play();
            } else {
                boxi.innerText = "X";
                turn = 1;
                bg.style.left = "85px";
                turnmusic.play();
            }

            cnt++;
            boxi.disabled = true;
            checkwinner();
            checkdraw();
        }
    });
});

const checkwinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos1 == pos2 && pos2 == pos3) {
            gameover = 1;
            winwin(pos1, pattern);
            disablebox();
        }
    }
};

const winwin = (pos1, pattern) => {
    console.log(pos1, "is winner");
    msg.innerText = pos1 + " is winner!";
    gameovermusic.play();
    restbtn.innerText = "Play again!";
    restbtn.style.backgroundColor = "#08d9d6";
    restbtn.style.color = "black";
    for (let i = 0; i < 3; i++) {
        boxes[pattern[i]].classList.add("green");
        boxes[pattern[i]].style.color = "black";
    }
};

const checkdraw = () => {
    if (cnt == 9 && gameover == 0) {
        gameover = 1;
        gameovermusic.play();
        msg.innerText = "Draw!";
        restbtn.innerText = "Play again!";
        restbtn.style.backgroundColor = "#08d9d6";
        restbtn.style.color = "black";
    }
};

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablebox = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        box.style.color = "white";
    }
    restbtn.innerText = "Reset";
    restbtn.style.backgroundColor = "#FF2E63";
};

const resett = () => {
    cnt = 0;  
    turn = 0;
    gameover = 0;  
    enablebox();
    msg.innerText = "";
    bg.style.left = "0px";
    boxes.forEach(e => {
        e.classList.remove("green");
    });
};

restbtn.addEventListener("click", resett);
