var express = require('express');
const ProjectsController=require('./controllers/ProjectsController');

var router = express.Router();
router.use(express.json());

router.post('/projects',ProjectsController.create);

router.get('/projects', ProjectsController.index);



module.exports = router;