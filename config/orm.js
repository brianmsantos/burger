const mysql = require('mysql')

module.exports = {
    all: (tableName) => {}, //sql shit in that function
    one: (tableName, id) => {
            return new Promise((resolve, reject) => {
                resolve(data)
            })
        } //sql querying 
}