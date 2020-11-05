var express = require('express');
const ProjectsController=require('./controllers/ProjectsController');

var router = express.Router();
router.use(express.json());

router.post('/projects',ProjectsController.create);

router.get('/projects', ProjectsController.index);
router.get('/', (req,res) => {
    res.send('OK');
});


module.exports = router;