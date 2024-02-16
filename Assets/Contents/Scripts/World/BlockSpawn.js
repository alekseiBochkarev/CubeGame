public var BlockTexture : Texture2D;
public var BlockTexture2 : Texture2D;

for (var z = -0; z > -10; --z)
for (var y = -0; y < 20; ++y)
for (var x = -0; x < 20; ++x) {
    
    var cube : GameObject = GameObject.CreatePrimitive(PrimitiveType.Cube);
    if (z == 0) {
    cube.GetComponent.<Renderer>().material.mainTexture = BlockTexture;
    cube.transform.position = transform.position + Vector3(x, z, y);}
    else{
    cube.GetComponent.<Renderer>().material.mainTexture = BlockTexture2;
    cube.transform.position = transform.position + Vector3(x, z, y);}
}