module.exports = function (router) {
    const filecall = require('./book')
    router.post('/add', filecall.add);
    router.get('/getBooks', filecall.get)
    router.delete('/deleteBooks/:id', filecall.delete)
    router.get('/getById/:id', filecall.getById)
    // router.update('/UpdateById', filecall.UpdateById)
    router.put('/UpdateById/:id', filecall.UpdateById)
    router.get('/getOne', filecall.getOne)
    return router;
}