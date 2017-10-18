const patterns = [
    'app.*',
    'lang.',
    'lib.*',
    'monitor.*',
    'ui.*',
    'util.*',
    'globalSettings',

    'qidian.*',
    '{theme}/*',

    'shtmlUI.*'
];

const matchPattern = (str, pattern) => {
    const parts = pattern.split('*');
    let p = 0;

    for(let part of parts) {
        let i = str.indexOf(part, p);
        if(i < 0)
            return false;
        p = i + part.length + 1;
    }
    return true;
};

var index = (name) => {
    for(let pattern of patterns) {
        if (matchPattern(name, pattern))
            return true;
    }
    return false;
};

export default index;
