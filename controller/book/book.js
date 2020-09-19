var bookSchmea = require('./model/bookdb')


module.exports = {
    add: addBooks,
    get: getBooks,
    delete: deleteBooks,
    getById: getById,
    UpdateById: UpdateById,
    getOne: getOne

}


function addBooks(req, res) {
    var obj = {
        name: req.body.name,
        author: req.body.author
    }
    var schema = new bookSchmea(obj);
    try {
        console.log("Inside Try")
        schema.save(function (result) {
            
                res.json({ code: 200, data: result, message: "saved sucess" })
                console.log("Books Saved")
            
        })

    }
    catch (e) {
        console.log("Inside Catch")
    }
    finally {
        console.log("Inside Finally")
    }


}

// function addBooks(req, res) {
//     var obj = {
//         name: req.body.name,
//         author: req.body.author
//     }
//     var schema = new bookSchmea(obj);


//     schema.save(function (err, result) {
//         if (err) {
//             console.log("err", err)
//             res.json({ code: 400, message: "something went wrong", err })
//         } else {
//             res.json({ code: 200, data: result, message: "saved sucess" })
//             console.log("Books Saved")
//         }
//     })

// }


function getBooks(req, res) {
    bookSchmea.find(function (err, result) {
        if (err) {
            console.log("err", err)
            res.json({ code: 400, message: "something went wrong" })
        } else {
            res.json({ code: 200, data: result, message: "saved sucess" })
            console.log("Books Fetching done")
        }
    })
}

function deleteBooks(req, res) {
    var params = req.params.id
    bookSchmea.findByIdAndRemove({ _id: params }, function (err, result) {
        if (err) {
            console.log("err", err)
            res.json({ code: 400, message: "something went wrong" })
        } else {
            res.json({ code: 200, data: result, message: "Delete sucess" })
            console.log("Data Deleted")
        }
    })
}

function getById(req, res) {
    var params = req.params.id
    console.log("String: ", params)
    bookSchmea.findOne({ _id: params }, function (err, result) {
        console.log("abc", result)
        if (err) {
            console.log("err", err)
            res.json({ code: 400, message: "something went wrong" })
        } else {
            res.json({ code: 200, data: result, message: "Data fetched sucess" })
            console.log("Data Fetched")
        }
    })
}

function UpdateById(req, res) {
    var params = req.params.id
    var newData = {
        name: req.body.name,
        author: req.body.author

    }
    bookSchmea.findOneAndUpdate({ _id: params }, newData, function (err, result) {
        if (err) {
            console.log("Inside UpdateById err if")
            console.log("err", err)
            res.json({ code: 400, message: "something went wrong" })
        } else {

            res.json({ code: 200, message: "Data Changed sucess" })
            console.log("Data Changed")
        }
    })

}

function getOne(req, res) {

    // var params = req.params.id
    var temp = req.body.author
    // var newData = {
    //     author: req.body.author
    // }
    // console.log("String: ", params)
    bookSchmea.findOne({ author: temp }, function (err, result) {
    // bookSchmea.find({ author: temp }, function (err, result) {
        console.log("abc", result)
        if (err) {
            console.log("err", err)
            res.json({ code: 400, message: "something went wrong" })
        } else {
            res.json({ code: 200, data: result, message: "Data fetched sucess" })
            console.log("Data Fetched")
        }
    })
}

