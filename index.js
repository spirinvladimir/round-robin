module.exports = (workers = [], count = 0, i = 0) => ({
    add: worker => workers[count++] = worker,
    del: worker => {
        let j = 0
        while (j < count && workers[j++] !== worker) {}
        while (j < count) workers[j - 1] = workers[j++]
        count--
    },
    get: () => workers[i++ % count]
})
