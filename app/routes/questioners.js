const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res)=>{
  model.Questioner.findAll({
    order: [['id', 'ASC']]
  })
  .then(dataQuestioner =>{
    res.render('questioner', {dataQuestioner: dataQuestioner})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add', (req, res)=>{
  res.render('add_questioner', {error: null})
})

router.post('/add', (req, res)=>{
  model.Questioner.create({
    pertanyaan: req.body.pertanyaan,
    dimensi: req.body.dimensi
    })
  .then(()=>{
    res.redirect('/questioners')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/edit/:id', (req, res) =>{
  model.Questioner.findById(req.params.id)
  .then(dataQuestioner =>{
    res.render('edit_questioner', {dataQuestioner, error: null})
  })
  .catch(err =>{
    res.send(err)
  })
})

router.post('/edit/:id', (req, res)=>{
  model.Questioner.update(
  {
    pertanyaan:req.body.pertanyaan,
    dimensi: req.body.dimensi
  },{
    where : {id:req.params.id}
  })
  .then(()=>{
    res.redirect('/questioners')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/delete/:id', (req, res) => {
  model.Questioner.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/questioners')
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router;
