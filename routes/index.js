const {
    taskFour,
    taskFive,
    taskSix,
    taskSeven,
    taskEight,
    taskTenAdd,
    taskTenDelete,
} = require('../controllers/Generic');

const router = require('express').Router();

router.route('/task4').get(taskFour);

router.route('/task5/:uid').get(taskFive);

router.route('/task6/:uid').get(taskSix);

router.route('/task7/:uid/:bname').get(taskSeven);

router.route('/task8/:uid').get(taskEight);

router.route('/task10/add').get(taskTenAdd);
router.route('/task10/delete').get(taskTenDelete);

module.exports = router;
