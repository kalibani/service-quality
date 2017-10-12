const express = require('express');
const router = express.Router();
const model = require('../models');
const scoring = require('../helper/scoring');
const sequelize = require('sequelize');

router.use((req, res, next) => {
  if (req.session.hasLogin && req.session.user.role === 'admin' ) {
    next()
  } else {
    res.redirect('/')
  }
})

router.get('/', (req, res)=>{
  let query1 = `select
    "QuestionerId",
    max("Questioners"."pertanyaan") as pertanyaan,
    max("Instructors"."name") as name,
    sum(nilai_harapan) as nilai_harapan,
    sum(nilai_kenyataan) as nilai_kenyataan
    from "UserQuestioners"
    left join "Instructors" ON "Instructors"."id" = "UserQuestioners"."InstructorId"
    left join "Questioners" ON "Questioners"."id" = "UserQuestioners"."QuestionerId"
    group by "QuestionerId","InstructorId"
    order by "InstructorId","QuestionerId";
    `

  model.sequelize
  .query(query1, {type: sequelize.QueryTypes.SELECT})

  .then(data=>{
      model.User.findAll()
      .then(jumlah=>{
        let count =  jumlah.length - 1

        res.render('reporting/reporting', {data:data, title: 'title', session:req.session, count})
      })
  })
})
module.exports = router;
