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
        res.render('instructor/instructor', {data:inst, title: 'Instructor', session: req.session})
    })
})

router.get('/add', (req, res)=>{
    res.render('instructor/add', {title: 'Add Instructor', session: req.session})
})

router.post('/add', (req, res)=>{
    model.Instructor.create({
        name: req.body.name
    })
    .then(()=>{
        res.redirect('/instructor')
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/delete/:id', (req, res) => {
    model.Instructor.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.redirect('/instructor')
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router;