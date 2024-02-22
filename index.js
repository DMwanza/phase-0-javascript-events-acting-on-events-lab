// // Your code here

// const dodger=document.getElementById('dodger');
// dodger.style.backgroundColor = "#FF69B4";


// function moveDodgerLeft() {
//     let leftNumbers=dodger.style.left.replace("px","");
//     let left = parseInt(leftNumbers, 10);

// if (left > 0) {
//     dodger.style.left = `${left - 1}px`;
// }
// }

// function moveDodgerRight() {
//     let leftNumbers=dodger.style.left.replace("px","");
//     let left = parseInt(leftNumbers, 10);

// if (left > 0) {
//     dodger.style.left = `${left + 1}px`;
// }
// }
// function moveDodgerUp() {
//     var upNumbers = dodger.style.bottom.replace('px', '');
//     var up = parseInt(upNumbers, 10)
//     console.log(up)
//     if (up >= 0) {
//       dodger.style.bottom = `${up + 1}px`
//     }
// }

// document.addEventListener("keydown", function (event) {
//     if(event.key==="ArrowLeft"){
//         moveDodgerLeft()
//     }
//     if(event.key==="ArrowRight"){
//         moveDodgerRight()
//     }
//     if(event.key==="ArrowUp"){
//         moveDodgerUp()
//     }
// });
const dodger=document.getElementById("dodger")
dodger.style.backgroundColor="red"

function moveDodgerLeft(){
    let leftNumbers=dodger.style.left.replace("px","")
    let left=parseInt(leftNumbers,10)
    dodger.style.left=`${left-5}px`
}

const moveDodgerRight=()=>{
    let rightNumbers=dodger.style.left.replace("px","")
    let right=parseInt(rightNumbers,10)
    dodger.style.left=`${right+5}px`
}
const moveDodgerUp=()=>{
    let upNumbers=dodger.style.bottom.replace("px","")
    let up=parseInt(upNumbers,10)
    dodger.style.bottom=`${up+5}px`
}
const moveDodgerDown=()=>{
    let downNumbers=dodger.style.bottom.replace("px","")
    let down=parseInt(downNumbers,10)
    if(down>0){
        dodger.style.bottom=`${down-5}px`
    }
}
document.addEventListener("keydown",e=>{
    if(e.key==="ArrowLeft"){
        moveDodgerLeft()
    }
    else if(e.key==="ArrowRight"){
        moveDodgerRight()
    }
    else if(e.key==="ArrowUp"){
        moveDodgerUp()
    }
    else if(e.key==="ArrowDown"){
        moveDodgerDown()
    }
})








