/*
The script deals with killing the player and restarting the scene when the player collides with the water floor
*/

function OnTriggerEnter (other : Collider) {
		
		Debug.Log("You died!");
		Application.LoadLevel("Demo");

}