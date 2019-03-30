function giveItBackLater (value, callback) {
    setTimeout(() => callback(value), 1000)
}

function promiseToGiveItBackLater (value) {
    return new Promise((resolve, reject) => {
        const result = giveItBackLater(value)
        resolve(result)
    })

}

function addSomePromises (promise) {
    promise.then( (result) => {
        return Promise.resolve(result * 2)
    }, (error) => {
        return Promise.reject(error * 3)
    })
}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}
