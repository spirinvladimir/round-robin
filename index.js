const
    workers = [];
let
    count = 0,
    i = 0;

module.exports.add = worker => workers[count++] = worker

module.exports.del = worker => {
    let j = 0;
    while (j < count && workers[j++] !== worker) {}
    while (j < count) workers[j - 1] = workers[j++]
    count--
}

module.exports.get = () => workers[i++ % count]
