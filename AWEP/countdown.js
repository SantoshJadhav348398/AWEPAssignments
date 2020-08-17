counter = 2;
function increaseCounter()
{
    counter++;   
   // var inc = document.getElementsById("addip").counter;
    
     document.getElementById("count").innerHTML = counter;
}
function decreaseCounter()
{
    counter--;
 //   var dec = document.getElementsById("lowerip").counter;
    
     document.getElementById("count").innerHTML = counter;
}