let Orm = require("../config/orm.js")

var burger = {
    all: function(cb) {
        Orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        Orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        Orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database 
module.exports = burger;