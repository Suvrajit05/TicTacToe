let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let newbtnGame=document.querySelector("#new-button");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let click_count=0;
let turnO= true ;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
        box.innerText="X";
        turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        click_count++;
        checkWinner();
    });
});
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcont.classList.add("hide")
    click_count=0;
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(Winner)=>{
    msg.innerText=`Congratulation the WINNER is ${Winner}`;
    msgcont.classList.remove("hide");
    disableboxes();

}
const checkWinner = ()=>{
    for(pattern of winPatterns){
        let pos1Val1=boxes[pattern[0]].innerText;
        let pos1Val2=boxes[pattern[1]].innerText;
        let pos1Val3=boxes[pattern[2]].innerText;
        if(pos1Val1 != "" && pos1Val2 != "" && pos1Val3 != ""){
            if(pos1Val1===pos1Val2 && pos1Val2===pos1Val3){
                console.log("Winner", pos1Val1);
                showWinner(pos1Val1);
            }
        }
    };
    if (click_count === 9) {
        msg.innerText = "Match is a DRAW";
        msgcont.classList.remove("hide");
    }
}
newbtnGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
