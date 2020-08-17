var count=0;
function Like()
{
    let likeCount=document.querySelector("#like");
    count++;
    likeCount.innerHTML=count;
}
var counter = 0;  
function Dislike()
{
    let likeCount=document.querySelector("#dislike");
    count--;
    likeCount.innerHTML=counter;
}

function Coment()
{
    let inpValue=document.querySelector("#inp").value;
    let cloneValue=document.querySelector("#placeComment").cloneNode(true);
    cloneValue.innerHTML=inpValue;

    let commentsDiv=document.querySelector("#commentDiv")
    commentsDiv.insertBefore(cloneValue,commentsDiv.firstChild)
}
