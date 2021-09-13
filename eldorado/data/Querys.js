const connection = require('./Connection')

const runQuery = (query, params = '') => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (errors, results, campos) => {
            if (errors) {               
                reject(errors)
            } else {               
                resolve(results)
            }
        })
    })
}

module.exports = runQuery