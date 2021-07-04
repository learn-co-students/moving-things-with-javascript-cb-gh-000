var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    var leftsize = parseInt(dodger.style.left.replace('px', ''));
    if (leftsize > 0) {
        dodger.style.left = `${leftsize - 1}px`;
    }
}

function moveDodgerRight() {
    var leftsize = parseInt(dodger.style.left.replace('px', ''));
    if (leftsize < 360) {
        dodger.style.left = `${leftsize + 1}px`;
    }
}

document.addEventListener('keydown', function (key) {
    if (key.which === 37) {
        moveDodgerLeft();
    } else if (key.which === 39) {
        moveDodgerRight();
    }
});
