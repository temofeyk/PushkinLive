module.exports = function () {
    require('./start.css');

    var wrapper = document.querySelector('#wrapper');
    var gamePageTemplateFn = require('./start.hbs');
    var data = require('../../js_modules/data/data.js');

    var res = data.getResult();

    if (res) {
        require('../result/result.js')();
    } else {

        wrapper.innerHTML = gamePageTemplateFn({taskNumber: '2'});

        var startButton = document.querySelector('#StartBtn');
        var delayLink = document.querySelector('#DelayLink');

        startButton.addEventListener('click', () => {
            require('../test/test.js')();
        });
        delayLink.addEventListener('click', e => {
            e.preventDefault();
            require('../main/main.js')();
        });
    }
}