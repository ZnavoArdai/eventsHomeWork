
//1
// function alertWithMessege(){
// alert("hiii h11");
// }
//2

// function printName(){
//     console.log("znavo")
// }

//3
// function changeColor(){
// var span=document.getElementById("span1");
// span.style.color = "red";
// }

//4
// function changeSize(){
// var h1=document.getElementById("h1");
// h1.style.fontSize="250px";
// };
//5

// function changeText(){
//     var p1=document.getElementById("p1");
//     p1.innerText="ooooo hello ooooo";
// }
//6

// var userName=prompt("enter name");
// function enterName(){
//     var p=document.getElementById("p1");
//     p.innerText=userName;
// }
//
7


// window.onload=function timeDate(){
// var time=new Date();
// var body=document.body;
// if(time.getHours<12)
// {
//     body.style.backgroundColor="yellow";
//     body.innerText="good day"
// }
// else{
//     body.style.backgroundColor="blue";
//     body.innerText="good evening"

// }
// }
//8

// window.onload=function printIfOver(){
//     var userNumber=+prompt("enter number");
// var body=document.body;
// var text=body.innerText;
//     if(userNumber>18){
//    body.innerText="welcom";
//    body.style.color="red"

//     }

//     else{
//         body.innerText="welcom";
//    body.style.color="blue"

//     } 
//    body.onmouseover =function changeColor (){
//        body.style.color="green";
//    }

//    changeColor();

//     }

//9+10

// function userNumberOtput(){
//     var p1=document.getElementById("p1");
//     var p2=document.getElementById("p2");

//     for(var i=0;i<5;i++){
//         var userNumber=+prompt("enter number 0-56");

//         p1.innerText+=" "+userNumber;
//     }

//     if(userNumber>0){
//         var rnd=Math.floor(Math.random()*56);
// p2.innerText+=" "+rnd;

// if(rnd==userNumber){
//     p2.innerText="you win"+rnd
// }
// else{
//     p2.innerText="you lose"+rnd

// }

//     }

// }
    


function userNumberOtput(){
    var p1=document.getElementById("p1");
    var p2=document.getElementById("p2");

    for(var i=0;i<5;i++){
        var userNumber=+prompt("enter number 0-56");

        p1.innerText+=" "+userNumber;
    }

    if(userNumber>0){
        for(var i=0;i<5;i++){
            var rnd=Math.floor(Math.random()*56);
            p2.innerText+=" "+rnd;
        }
   
    }

}

