const router = require('express').Router();
const controller = require('../controllers/boards');

router.post('/', controller.createBoard(req, res));
router.put('/', controller.updateBoard(req, res));

module.exports = router;
