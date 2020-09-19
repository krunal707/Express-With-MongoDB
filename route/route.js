module.exports= function(express){
const router=express.Router()
require('../controller/book/bookroute')(router);

return router;
    
}