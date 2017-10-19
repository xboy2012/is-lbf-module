import detect from './core/detect';
let cache = {};

const isLbfModule = (name) => {
    const key = `_CACHE_${name}`;
    if(!cache.hasOwnProperty(key)) {
        cache[key] = detect(name);
    }
    return cache[key];
};

//clear caches
isLbfModule.clearCache = () => {
    cache = {};
};

export default isLbfModule;


