const express = require('express');
const router = express.Router();
const model = require('../models');

router.use((req, res, next) => {
  if (req.session.hasLogin) {
    next()
  } else {
    res.redirect('/')
  }
})

router.get('/', (req, res) => {
  model.Instructor.findAll()
    .then(instructor => {
      res.render('answer-questioner/select-instructor', { data: instructor, title: 'Select', session: req.session })
    })
})


router.post('/', (req, res) => {
  // req.session.user = {
  //   instructors: req.body.nama_instruktur
  // }
  // console.log('====================session===================', req.session);
  // console.log('---------------------body---------------------', req.body);
  // model.Instructor.findById(req.params.id)
  res.redirect(`/questioner_student/${req.body.id}/answer`)
})

router.get('/:id/answer', (req, res) => {
  model.Questioner.findAll({ order: [['id', 'ASC']] })
    .then((dataQuestioner) => {
      model.User.findAll()
        .then((dataUser) => {
          res.render('answer-questioner/questioner_students', { dataUser: dataUser, dataQuestioner: dataQuestioner, session: req.session, title: 'Quest' })
        })
    })
})

router.post('/:id/answer', (req, res) => {
  // console.log(req.session);
  for (var i = 0; i < 13; i++) {
    model.UserQuestioner.create({
      UserId: req.session.user.id,
      QuestionerId: req.body.QuestionerId[i],
      nilai_harapan: req.body.nilai_harapan[i],
      nilai_kenyataan: req.body.nilai_kenyataan[i],
      InstructorId: req.params.id,
      createdAt: new Date(),
      updatedAt: new Date()
    })
      .then(() => {
        // res.send(ok)
        // res.send('Anda Telah mengisi kuesioner')
        res.redirect('/questioner_students')
      })
      .catch(err => {
        res.send(err)
      })
  }
})


module.exports = router;
