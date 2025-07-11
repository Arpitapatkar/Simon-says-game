let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started === false){
         console.log("game started");
         started  = true;

         levelup();
    } 
});

function gameflash(btn){                     //flash arrive
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){                     //flash arrive
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    //random button choose
    let randidx= Math.floor(Math.random()*4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq)
   gameflash(randbtn);  
}

function checkbtn(idx){
    // console.log("curr level",level);
    if(userseq[idx]=== gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</B> <br>Press any key to  Restart the game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }

}

function btnPress(){
    // console.log(this);
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);

    checkbtn(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}


function reset(){
     started = false;
     gameseq = [];
     userseq = [];
     level = 0; 
}