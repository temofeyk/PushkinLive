module.exports = function () {
    require('./test.css');

    var wrapper = document.querySelector('.gamePage');
    var data = require('../../js_modules/data/data.js');
    var testPageTemplateFn = require('./test.hbs');
    var overlayHelper = require('../popupOverlay/popupOverlay.js');
    var testResult = 0;

    function render(idx) {
        if (idx < data.length()) {
            let item = data.getItem(idx);
            wrapper.innerHTML = testPageTemplateFn(item);
            let rightBtn = document.querySelector('#right'),
                wrongBtn = document.querySelector('#wrong');
            idx++;

            function btnClickHandler(isRight) {
                let flag = isRight ? item.right : !item.right;

                if (flag) testResult++;
                data.setResult(testResult);
                overlayHelper.showPopup({isRight: flag});
                setTimeout(() => {
                    render(idx);
                }, 1500);
            }

            rightBtn.addEventListener('click', btnClickHandler.bind(null, true));
            wrongBtn.addEventListener('click', btnClickHandler.bind(null, false));

        } else {
            require('../result/result.js')();
        }
    }

    var res = data.getResult();

    if (res) {
        render(data.length());
    }
    else render(0);
}