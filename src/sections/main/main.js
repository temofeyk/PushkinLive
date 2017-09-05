module.exports = function () {
    require('./main.css');

    var wrapper = document.querySelector('#wrapper'),
        mainPageTemplateFn = require('./main.hbs');

    wrapper.innerHTML = mainPageTemplateFn();
    var startButton = document.querySelector('#MainBtn');
    startButton.addEventListener('click', e => {
        require('../start/start.js') ();
    });


}