const burger = require("../models/burger.js")
    //CRUD//INDEX is all 
module.exports = {
    index: () => {
        burger.all()
    },
    create: (data) => {},
    read: (id) => {
        burger.get_by_id(id);
    },
    update: (data) => {},
    delete: (data) => {},
}