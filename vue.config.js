var goods = require('./data/goods.json');
var ratings = require('./data/ratings.json');
var seller = require('./data/seller.json');


module.exports = {
    devServer:{
              before(app){
                  app.get('/api/seller',function(req,res){
                      res.json({
                          errno:0,
                          data:seller
                      })
                  })
                  app.get('/api/goods',function(req,res){
                      res.json({
                          errno:0,
                          data:goods
                      })
                  })
                  app.get('/api/ratings',function(req,res){
                      res.json({
                          errno:0,
                          data:ratings
                      })
                  })
              }
          }
}