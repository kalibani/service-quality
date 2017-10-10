var express = require('express');
var router = express.Router();
const model = require('../models');
const hash = require('../helper/hash')

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.hasLogin){
    res.render('index', { title: 'HACKTIV8', session: req.session });
  } else {
    res.redirect('/login')
  }
});

//LOGIN MENU
router.get('/login', (req, res)=>{
  res.render('login', { error_login: false, title: 'Login'})
})

router.post('/login', (req, res)=>{
  model.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user=>{
    // let hash_password = ''
    let salt = user.salt
    let hash_password = hash(req.body.password, salt)
    if(user.password === hash_password){
      req.session.hasLogin = true
      req.session.user = {
        username : user.username,
        role : user.role,
        loginTime : new Date()
      }
      res.redirect('/')
    } else {
      res.render('login', { error_login: true, title: 'Login'})
    }
  })
  .catch(err=>{
    res.render('login', { error_login: true, title: 'login'})
  })
})

// REGISTER AREA ==================
router.get('/register', (req, res) => {
  res.render('register', { error_reg: false, title: 'Register'})
})

router.post('/register', (req, res) => {
  model.User.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  })
    .then(() => {
      res.render('succedreg',{title: 'Success'})
    })
    .catch(err => {
      res.render('register', { error_reg: true, title: 'Register' })
    })
})

// LOG OUT =====================
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})

module.exports = router;
