//This script deals with breaking/building of blocks.

private var blockLayer : LayerMask = 1;
public var range : float = Mathf.Infinity;
public var hit : RaycastHit;
public var CubeTexture : Texture2D;

public var BlockGUI : GUIStyle;
public var CurrentBlock : String = "";

public var BlockObject : GameObject;

public var CurrentBlockTexture : Texture2D;
public var DirtBlock : Texture2D;
public var StoneBlock : Texture2D;
public var StoneBrickBlock : Texture2D;
public var SandBlock : Texture2D;
public var WoodBlock : Texture2D;
public var WoolBlock : Texture2D;
public var BrickBlock : Texture2D;
public var IronBlock : Texture2D;
public var GoldBlock : Texture2D;

public var PickAxeObject : GameObject;
public var HandObject : GameObject;

public var BreakSound : AudioClip;
public var BuildSound : AudioClip;

function Start () {

    CurrentBlockTexture = DirtBlock;
    CurrentBlock = "Dirt";
}
 
function Update () {

    if (Input.GetMouseButtonDown(1))
        Build();
    
    if (Input.GetMouseButtonDown(0))
        Erase();
    
    if(Input.GetKeyDown (KeyCode.Alpha1)) {
    
       BlockObject.GetComponent.<Renderer>().material.mainTexture = DirtBlock;
       CurrentBlockTexture = DirtBlock;
       CurrentBlock = "Dirt";
    }
    
    if(Input.GetKeyDown (KeyCode.Alpha2)) {
    
       BlockObject.GetComponent.<Renderer>().material.mainTexture = StoneBlock;
       CurrentBlockTexture = StoneBlock;
       CurrentBlock = "Stone";
    }
    
    if(Input.GetKeyDown (KeyCode.Alpha3)) {
    
       BlockObject.GetComponent.<Renderer>().material.mainTexture = StoneBrickBlock;
       CurrentBlockTexture = StoneBrickBlock;
       CurrentBlock = "Stone Brick";
    }
    
    if(Input.GetKeyDown (KeyCode.Alpha4)) {
    
       BlockObject.GetComponent.<Renderer>().material.mainTexture = SandBlock;
       CurrentBlockTexture = SandBlock;
       CurrentBlock = "Sand";
    }
    
    if(Input.GetKeyDown (KeyCode.Alpha5)) {
    
       BlockObject.GetComponent.<Renderer>().material.mainTexture = WoodBlock;
       CurrentBlockTexture = WoodBlock;
       CurrentBlock = "Wood";
    }
    
    if(Input.GetKeyDown (KeyCode.Alpha6)) {
    
       BlockObject.GetComponent.<Renderer>().material.mainTexture = WoolBlock;
       CurrentBlockTexture = WoolBlock;
       CurrentBlock = "Wool";
    }
    
    if(Input.GetKeyDown (KeyCode.Alpha7)) {
    
       BlockObject.GetComponent.<Renderer>().material.mainTexture = BrickBlock;
       CurrentBlockTexture = BrickBlock;
       CurrentBlock = "Brick";
    }
    
    if(Input.GetKeyDown (KeyCode.Alpha8)) {
    
       BlockObject.GetComponent.<Renderer>().material.mainTexture = IronBlock;
       CurrentBlockTexture = IronBlock;
       CurrentBlock = "Iron Block";
    }
    
    if(Input.GetKeyDown (KeyCode.Alpha9)) {
    
       BlockObject.GetComponent.<Renderer>().material.mainTexture = GoldBlock;
       CurrentBlockTexture = GoldBlock;
       CurrentBlock = "Gold Block";
    }
}
 
function Build() {
    
    if (HitBlock()) {
        var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        cube.transform.position = hit.transform.position + hit.normal;
        cube.GetComponent.<Renderer>().material.mainTexture = CurrentBlockTexture;
        GetComponent.<AudioSource>().PlayOneShot(BuildSound);
        HandObject.GetComponent.<Animation>().Play ("Build");
    }
}
 
function Erase() {
    
    if (HitBlock())
        Destroy(hit.transform.gameObject);
        GetComponent.<AudioSource>().PlayOneShot(BreakSound);
        PickAxeObject.GetComponent.<Animation>().Play ("Break");
}
 
function HitBlock() : boolean {
    
    return Physics.Raycast(transform.position, transform.forward, hit, range, blockLayer);

}

function OnGUI () {

    GUI.Label(Rect(950,600,100,100),"" + "Current Block: " + "" + CurrentBlock + "" + "",BlockGUI);

}
