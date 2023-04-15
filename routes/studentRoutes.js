const {Router} = require('express');


const { createStudent, getAllStudents, updateStudentbyFirstName } = require('../controllers/studentController');


const router = Router();

router.get('/students', getAllStudents);
router.post('/students', createStudent);
router.put('/students/:firstname',updateStudentbyFirstName );


module.exports = router;