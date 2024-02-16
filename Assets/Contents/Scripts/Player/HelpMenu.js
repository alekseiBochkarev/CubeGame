public var MenuObject : GameObject; 

function Awake () {

    MenuObject.active = false;
}

function Update () {

    if(Input.GetKeyDown(KeyCode.P))//Press "P" to enable the help menu
    {
       MenuObject.active = true;
    }
}
