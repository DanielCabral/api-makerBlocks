var express = require('express');
const ProjectsController=require('./controllers/ProjectsController');

var router = express.Router();
router.use(express.json());

router.post('/project',ProjectsController.create);

router.get('/projects', ProjectsController.index);

router.put('/project', ProjectsController.update);

router.get('/project/:id', ProjectsController.get);

router.get('/', (req,res) => {
    res.send('OK');
});


module.exports = router;