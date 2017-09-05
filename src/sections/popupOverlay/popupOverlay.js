require('./popupOverlay.css');
module.exports.showPopup = function showPopup(options) {
    var popup = document.querySelector('.PopupOverlay');
    popup.style.display = 'block';
    if (options.isRight) {
        popup.innerHTML = require('./overlayRight.hbs')();
    } else {
        popup.innerHTML = require('./overlayWrong.hbs')();
    }
}