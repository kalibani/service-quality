const express = require('express');
const router = express.Router();
const model = require('../models');

router.use((req, res, next)=>{
    if (req.session.hasLogin && req.session.user.role === 'admin') {
        next()
    } else {
        res.redirect('/')
    }
})

router.get('/', (req, res)=>{
    model.Instructor.findAll({
        order:[['id', 'ASC']]
    })
    .then(inst=>{
        res.render('intructor/instructor', {data:inst, title: 'Instructor'})
    })
})

module.exports = router;