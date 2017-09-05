module.exports = function () {
    require('./result.css');

    var wrapper = document.querySelector('#wrapper');
    var resultPageTemplateFn = require('./result.hbs');
    var data = require('../../js_modules/data/data.js');
    var res = data.getResult();
    var options = {Right: 0, All: data.length()};


    if (res) {
        options.Right = res;
        options.RestartCaption = 'Пройти заново';

    } else {
        options.RestartCaption = 'Продолжить';
    }
    ;
    wrapper.innerHTML = resultPageTemplateFn(options);

    var restartBtn = document.querySelector('#RestartBtn');
    var delayLink = document.querySelector('#DelayLink');

    restartBtn.addEventListener('click', () => {
        if (res) {
            data.cleaResult();
            require('../start/start.js')();
        }
        else {
            require('../main/main.js')();
        }
    });

    delayLink.addEventListener('click', e => {
        e.preventDefault();
        require('../main/main.js')();
    });

}