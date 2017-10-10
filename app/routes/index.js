var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // if(req.session.hasLogin){
    res.render('index', { title: 'Express' });
  // } else {
  //   res.redirect('/login')
  // }
});

//LOGIN MENU
router.get('/login', (req, res)=>{
  res.render('login')
})

module.exports = router;
