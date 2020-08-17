function sendMessage()
{
    var message = document.getElementById("message").value;
    document.getElementById("abc").innerHTML = "Last Message Delivered";
    document.getElementById("xyz").innerHTML = message;
}