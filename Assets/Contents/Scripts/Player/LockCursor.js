/*
Script made by Josh Bohart of Mad Dragon Games
*/

public var CursorOn = false; //Is the cursor on or off?


function Start () {

    CursorOnOff = true; //Cursor is on
    Cursor.visible = true; //Show the cursor
}

function Update(){

if(Input.GetKeyDown(KeyCode.L)){ //If the key "L" is pushed, execute the block of code below
 
    if(CursorOn == true){ //If the Cursor is shown, execute the code below
       Cursor.visible = false;
       CursorOn = false;
    }
 
    else if //But, if the Cursor isnt showing, execute the code below
    
    (CursorOn == false){
       Cursor.visible = true;
       CursorOn = true;
    }
  }
}



