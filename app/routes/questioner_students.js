const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res)=>{
  model.UserQuestioner.findAll({
    include: [{all: true}]
  })
  .then(dataUserQuestioner=>{
    res.render('questioner_students', {dataUserQuestioner: dataUserQuestioner})
  })
  .catch(err=>{
    res.send(err)
  })
})



module.exports = router;
