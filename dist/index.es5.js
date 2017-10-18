
var patterns = ['app.*', 'lang.', 'lib.*', 'monitor.*', 'ui.*', 'util.*', 'globalSettings', 'qidian.*', '{theme}/*', 'shtmlUI.*'];

var matchPattern = function matchPattern(str, pattern) {
    var parts = pattern.split('*');
    var p = 0;

    for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var part = _ref;

        var i = str.indexOf(part, p);
        if (i < 0) return false;
        p = i + part.length + 1;
    }
    return true;
};

var index = function index(name) {
    for (var _iterator2 = patterns, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var pattern = _ref2;

        if (matchPattern(name, pattern)) return true;
    }
    return false;
};

module.exports = index;