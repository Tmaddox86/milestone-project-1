var ball = document.getElementById("ball");
let left = 0;
let ballTop = 0;
let ballLeft = 0;
var game = document.getElementById("game"); left = 0;
let counter = 0;
let block = document.createElement("div"); //creates new div
let hole = document.createElement("div"); //creates new div
    
    function createBlocks() {

        block.setAttribute("class", "block"); //sets class 
        hole.setAttribute("class", "hole"); //sets class
        block.setAttribute("id", "block"); //sets id 
        hole.setAttribute("id", "hole"); //sets id 
        block.style.top = block + 100 + "px"; //styles new div and makes it equal to new varible
        hole.style.top = hole + 100 + "px"; //styles new div and makes it equal to new varible
        var random = Math.floor(Math.random() * 360); //makes holes in random places
        hole.style.left = random + "px"; //styles holes in random spots
        hole.getElementsByClassName("hole");
        game.appendChild(block); //adds lines to dom
        game.appendChild(hole); //adds gaps to the line
        
    
    };
    
    createBlocks()

let block1 = document.createElement("div"); //creates new div
let hole1 = document.createElement("div"); //creates new div
       
    function createBlocks1() {

        block1.setAttribute("class", "block1"); //sets class 
        hole1.setAttribute("class", "hole1"); //sets class
        block1.setAttribute("id", "block1" + counter); //sets id 
        hole1.setAttribute("id", "hole1" + counter); //sets id 
        block1.style.top = block1 + 200 + "px"; //styles new div and makes it equal to new varible
        hole1.style.top = hole1 + 200 + "px"; //styles new div and makes it equal to new varible
        var random = Math.floor(Math.random() * 360); //makes holes in random places
        hole1.style.left = random + "px"; //styles holes in random spots
        hole1.getElementsByClassName("hole1");
        game.appendChild(block1); //adds lines to dom
        game.appendChild(hole1); //adds gaps to the line
    }
    
    createBlocks1()

let block2 = document.createElement("div"); //creates new div
let hole2 = document.createElement("div"); //creates new div
       
    function createBlocks2() {

        block2.setAttribute("class", "block2"); //sets class 
        hole2.setAttribute("class", "hole2"); //sets class
        block2.setAttribute("id", "block2" + counter); //sets id 
        hole2.setAttribute("id", "hole2" + counter); //sets id 
        block2.style.top = block2 + 200 + "px"; //styles new div and makes it equal to new varible
        hole2.style.top = hole2 + 200 + "px"; //styles new div and makes it equal to new varible
        var random = Math.floor(Math.random() * 360); //makes holes in random places
        hole2.style.left = random + "px"; //styles holes in random spots
        hole2.getElementsByClassName("hole1");
        game.appendChild(block2); //adds lines to dom
        game.appendChild(hole2); //adds gaps to the line
    }
    
    createBlocks2()

let block3 = document.createElement("div"); //creates new div
let hole3 = document.createElement("div"); //creates new div
       
    function createBlocks3() {

        block3.setAttribute("class", "block3"); //sets class 
        hole3.setAttribute("class", "hole3"); //sets class
        block3.setAttribute("id", "block3" + counter); //sets id 
        hole3.setAttribute("id", "hole3" + counter); //sets id 
        block3.style.top = block3 + 200 + "px"; //styles new div and makes it equal to new varible
        hole3.style.top = hole3 + 200 + "px"; //styles new div and makes it equal to new varible
        var random = Math.floor(Math.random() * 360); //makes holes in random places
        hole3.style.left = random + "px"; //styles holes in random spots
        hole3.getElementsByClassName("hole3");
        game.appendChild(block3); //adds lines to dom
        game.appendChild(hole3); //adds gaps to the line
    }
    
    createBlocks3()

function stopBall(){
    $(".ball").click(function(){
        $("#block").stop();
      });
}

//code works to move ball left and right but goes off page 68 to 86
let moveBy = 5;
window.addEventListener("load", function () {
    
    ball.style.position = 'relative';
    ball.style.left = 0;
    ball.style.top = 0;

});
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            ball.style.left = parseInt(ball.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            ball.style.left = parseInt(ball.style.left) + moveBy + 'px';
            break;
    }
});

const delay = ms => new Promise(res => setTimeout(res, ms));
setInterval(async function () {
    
    if (parseInt(ball.style.top) < 550) {
        ball.style.top = parseInt(ball.style.top) + moveBy + 'px';
    } else {
        ball.style.top = '580px';
    }
}, 30)
