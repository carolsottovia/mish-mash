function giveItBackLater (value, callback) {
    setTimeout(() => callback(value), 1000)
}

function promiseToGiveItBackLater(value) {
    return new Promise((resolve, reject) => {
        giveItBackLater(value, (value) => {
            resolve(value);
        })
    })
}

function addSomePromises(somePromise) {
    return somePromise
        .then((value) => {
            return value + value;
        })
        .catch((value) => {
            return value + value + value;
        });
}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}
