private var Timer = 0.0; //Timer
public var BobbingSpeed = 0.18; //Head bob speed
public var BobbingAmount = 0.1; //Head bob Amount
public var Midpoint = 1.0; //Midpoint

function Update () { 
    
  Waveslice = 0.0; 
  horizontal = Input.GetAxis("Horizontal"); 
  vertical = Input.GetAxis("Vertical"); 
    
    if (Mathf.Abs(horizontal) == 0 && Mathf.Abs(vertical) == 0) { 
       Timer = 0.0; 
    } 
    else 
    { 
       Waveslice = Mathf.Sin(Timer); 
       Timer = Timer + BobbingSpeed; 
       if (Timer > Mathf.PI * 2) { 
          Timer = Timer - (Mathf.PI * 2); 
       } 
    } 
    if (Waveslice != 0) { 
       translateChange = Waveslice * BobbingAmount; 
       totalAxes = Mathf.Abs(horizontal) + Mathf.Abs(vertical); 
       totalAxes = Mathf.Clamp (totalAxes, 0.0, 1.0); 
       translateChange = totalAxes * translateChange; 
       transform.localPosition.y = Midpoint + translateChange; 
    } 
    else 
    { 
       transform.localPosition.y = Midpoint; 
    } 
 }