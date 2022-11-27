// new program

var score=0, gameTime=0, gameTimer, ufoX=0, ufoY=0, atomX=0, atomY=0;
onkeydown=handleKeys;
onready=startUp();

// functions that set any element's coordinates
function setLeft(id,x)
    {
    document.getElementById(id).style.left=x+"px";
    }

function setTop(id,y)
    {
    document.getElementById(id).style.top=y+"px";
    }

// function that returns arandom number between two values
function randomNumber(low,high){return(Math.floor(low+Math.random()*(1+high-low)));}

// startup function
// moves atom/cake to a random location
function startUp(){
   moveAtom();
   gameTimer=window.setInterval(displayTime, 1000);
}

// this variable will show how long the game has been running
function displayTime(){
   gameTime++;
   document.getElementById("timeTB").innerText="Time:"+gameTime;

}

// function that moves atom/cake to a random place on the screen
function moveAtom(){
    atomX=randomNumber(2,16);
    atomY=randomNumber(2,16);
    setLeft("atom",50*atomX);
    setTop("atom",50*atomY);

}

function handleKeys(e){
    if(e.keyCode==37){ufoX--;}
    if(e.keyCode==39){ufoX++;}
    if(e.keyCode==38){ufoY--;}
    if(e.keyCode==40){ufoY++;}
    setLeft("ufo",50*ufoX);  // sets the new ufo location
    setTop("ufo",50*ufoY);   // sets the new ufo location
    checkIfHitAtom();


}

// check for hit, and see if we need to end the game
function checkIfHitAtom(){
    if((ufoX==atomX) && (ufoY==atomY)){
        score++;
        document.getElementById("scoreTB").innerText="Score: "+score;
        moveAtom();
        if(score==5){gameOver();}
    }

}

function gameOver(){
    clearInterval(gameTimer);
    alert("Good job! You ate the cake. Your time was: "+gameTime);
    location.reload();
}