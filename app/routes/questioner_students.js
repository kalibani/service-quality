const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res)=>{
  model.Questioner.findAll({order:[['id', 'ASC']]})
  .then((dataQuestioner)=>{
    model.User.findAll()
      .then((dataUser)=>{
        res.render('questioner_students', {dataUser: dataUser, dataQuestioner : dataQuestioner})
      })
    })
})


router.get('/:id/answer', (req, res)=>{
  model.UserQuestioner.findAll({
    where: {
      UserId: req.params.id
    },
    include: [{all: true}]
  })
  .then(dataUserQuestioner=>{
    model.Questioner.findAll()
    .then(dataQuestioner=>{
      res.send({dataUserQuestioner, dataQuestioner})
    })

    // res.render('questioner_students', {dataUserQuestioner: dataUserQuestioner})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/:id/answer', (req, res)=>{
  console.log(req.body);
  for (var i = 0 ; i< 14; i++){
    model.UserQuestioner.create({
      UserId:req.params.id,
      QuestionerId: req.body.QuestionerId[i],
      nilai_harapan: req.body.nilai_harapan[i],
      nilai_kenyataan: req.body.nilai_kenyataan[i],
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then((ok)=>{
      // res.send(ok)
      res.send('Anda Telah mengisi kuesioner')
    })
    .catch(err=>{
      res.send(err)
    })
  }
})


module.exports = router;
