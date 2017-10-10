const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res)=>{
  model.Questioner.findAll({
    order: [['id', 'ASC']]
  })
  .then(dataQuestioner =>{
    res.render('questioner/questioner', { dataQuestioner: dataQuestioner,  title: 'Questioner'})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add', (req, res)=>{
  res.render('questioner/add_questioner', { error: null, title: 'ADD Questioner'})
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
    res.render('questioner/edit_questioner', { dataQuestioner, error: null, title: 'Questioner Edit'})
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
