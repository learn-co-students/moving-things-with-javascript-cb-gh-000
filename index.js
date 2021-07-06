const app = "I don't do much."
var dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
document.addEventListener('keydown', movement);

function movement(key) {
  if (key.which == 37) {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left-3}px`;
    }
  }
  if (key.which == 39) {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);

    if (left < 350) {
      dodger.style.left = `${left+3}px`;
    }
  }
}
