canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockHeight = 30;
blockWidth = 30;

playerObject = "";
blockObject = "";



function createPlayer(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);

        playerObject.set({
            top:playerY,
            left:playerX
        });

        canvas.add(playerObject);
    })
}

function createBlocks(newBlocks){
    fabric.Image.fromURL(newBlocks, function(Img){
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);

        blockObject.set({
            top:playerY,
            left:playerX
        });

        canvas.add(blockObject);
    })
}

window.addEventListener("keydown", keyDown);

function keyDown(e){
    keyPressed = e.keyCode;
    console.log(e);
    w = document.getElementById("width");
    h = document.getElementById("height");
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("Key Pressed = Shift + P")
        blockHeight += 10;
        blockWidth += 10;
        w.innerHTML = blockWidth;
        h.innerHTML = blockHeight;
    }
    if(e.shiftKey == true && keyPressed == "77"){
        console.log("Key Pressed = Shift + M")
        blockHeight -= 10;
        blockWidth -= 10;
        w.innerHTML = blockWidth;
        h.innerHTML = blockHeight;
    }

    if(keyPressed == "83"){
        createBlocks("stone.jpg")
        console.log("Key Pressed = S")
    }

    if(keyPressed =="79"){
        createBlocks("obsidian.png");
        console.log("Key Pressed = O");
    }

    if(keyPressed == "78"){
        createBlocks("roof.jpg");
        console.log("Key Pressed = N");
    }

    if(keyPressed == "87"){
        createBlocks("trunk.jpg");
        console.log("Key Pressed = W");
    }

    if(keyPressed == "71"){
        createBlocks("unique.png");
        console.log("Key Pressed = G");
    }

    if(keyPressed == "76"){
        createBlocks("leaf.jpg");
        console.log("Key Pressed = L");
    }

    if(keyPressed == "38"){
        up();
        console.log("UP")
    }

    if(keyPressed == "37"){
        left();
        console.log("LEFT")
    }

    if(keyPressed == "39"){
        right();
        console.log("RIGHT")
    }

    if(keyPressed == "40"){
        down();
        console.log("DOWN")
    }
}
function up(){
    playerY = playerY - blockHeight;
    console.log("PlayerY = " + playerY);
    canvas.remove(playerObject);
    createPlayer();
}

function down(){
    playerY = playerY + blockHeight;
    console.log("PlayerY = " + playerY);
    canvas.remove(playerObject);
    createPlayer();
}

function right(){
    playerX = playerX + blockWidth;
    console.log("PlayerX = " + playerX);
    canvas.remove(playerObject);
    createPlayer();
}

function left(){
    playerX = playerX - blockWidth;
    console.log("PlayerX = " + playerX);
    canvas.remove(playerObject);
    createPlayer();
}

function guide(){
    window.location = "guide.html";
}