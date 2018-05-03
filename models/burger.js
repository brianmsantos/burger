const Orm = require("./config/orm.js")
    // module.exports = {
    //     all: Orm.all('TableName'),
    //     get_by_id: (id) => { Orm.one('Cats(table)', id) }
    // }

module.exports = {
    all: Orm.all('burgers'),
    get_by_id: (id) => { Orm.one('burgers(table)', id) }
}