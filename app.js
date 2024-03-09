// 1. press any key
// 2. level 1+ butn flush
// 3. pressed btn == game seq or not?
// 4. if doesnot match then game Over
// else
// goto level 2

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow","red","purple","green"];


 let h2= document.querySelector("h2");


document.addEventListener("keypress", function() {
    if(started == false)
    {
        console.log("game is started");
        started = true;
    }
        levelup();
    
});

//2..random btn flush hoga and level 0 to 1//
//game flash turns the flash color white//

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function ()
    {
        btn.classList.remove("flash");
    },250);
}


//userflash func....make the color green//

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function ()
    {
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
    userSeq= []; //if i press one  key then  for the next i have to press key from the starting
    level++;
    h2.innerText= `Level ${level}`;     //h2 me level updation


//     //random choose// choose from index 0-3 means yelow to green//
    let randIdx = Math.floor(Math.random() * 3);
    let randColor=btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

//level tracking//
function checkAns(){
    //console.log("current level is: ",level);

    let idx = level-1;

    if (userSeq[idx] === gameSeq[idx])
    {
        console.log("same value");
    }
    else{
        h2.innerText=`game over!press any key to start.`;
        
    }
}

//current level pass//
function checkAns(idx){

   //chcek gameseq == userseq or not

   //let idx =level-1;

   if(userSeq[idx]=== gameSeq[idx]){
    if(userSeq.length === gameSeq.length){
        setTimeout(levelup,1000);
    }
   }
   else{
    h2.innerHTML = `Game over ! Your score is <b>${level}</b> <br> Press any key to start`;
   document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white";
    },200);
    reset();
   }
}
//btn-press func//------after the flash..if i press the flashed 
// btn then it will show..the btn was pressed//

function btnPress() {
    
    let btn=this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

//index.html se sare btn ko access karenge//
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq= [];
    userSeq= [];
    level = 0;
}