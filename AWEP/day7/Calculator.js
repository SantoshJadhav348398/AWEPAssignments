function add()
{
    var x = document.getElementById("first").value;
    var y = document.getElementById("second").value;
    var z;
    if(document.getElementById("add"))
        z=x+y;
    document.getElementById("answer").value=z;    
}        
function substract()
{
    var x = document.getElementById("first").value;
    var y = document.getElementById("second").value;
    if(document.getElementById("sub"))
        z=x-y;
    document.getElementById("answer").value=z;    
}        
function multiply()
{
    var x = document.getElementById("first").value;
    var y = document.getElementById("second").value;
    if(document.getElementById("mul"))
        z=x*y;
    document.getElementById("answer").value=z;    
}        
function divide()
{
    var x = document.getElementById("first").value;
    var y = document.getElementById("second").value;
    if(document.getElementById("div"))
        z=x/y;
    document.getElementById("answer").value=z;    
}        