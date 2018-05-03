const burgerController = require("./controllers/burger_controller.js")

module.exports = (router) => {
    router.get('/:id', (req, res) => {
        burgerController.read(req.params.id)
            .then((data) => {
                res.render('index', data)
            })
    })
}