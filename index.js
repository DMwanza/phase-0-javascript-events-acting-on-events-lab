// Your code here

const dodger=document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft() {
    let leftNumbers=dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers, 10);

if (left > 0) {
    dodger.style.left = `${left - 1}px`;
}
}

function moveDodgerRight() {
    let leftNumbers=dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers, 10);

if (left > 0) {
    dodger.style.left = `${left + 1}px`;
}
}
function moveDodgerUp() {
    var upNumbers = dodger.style.bottom.replace('px', '');
    var up = parseInt(upNumbers, 10)
    console.log(up)
    if (up >= 0) {
      dodger.style.bottom = `${up + 1}px`
    }
}

document.addEventListener("keydown", function (event) {
    if(event.key==="ArrowLeft"){
        moveDodgerLeft()
    }
    if(event.key==="ArrowRight"){
        moveDodgerRight()
    }
    if(event.key==="ArrowUp"){
        moveDodgerUp()
    }
});








