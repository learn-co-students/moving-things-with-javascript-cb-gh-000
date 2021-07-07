const app = "I don't do much."
function moveDodgerRight(){
  var rightNumbers = dodger.style.left.replace('px', '')
var right = parseInt(leftNumbers, 10)

if (right > 0) {
  dodger.style.left = `${right-1}px`
}
}
