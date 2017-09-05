var data = require('../../js_modules/data/data.json');

module.exports.getItem = (idx) => {
    return data[idx];
}

module.exports.length = () => {
    return data.length;
}

module.exports.setResult = (val) => {
    localStorage.setItem('testResult', val);
}

module.exports.getResult = () => {
    return localStorage.getItem('testResult');
}

module.exports.cleaResult = () => {
    localStorage.removeItem('testResult');
}