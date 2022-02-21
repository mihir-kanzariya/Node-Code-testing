
const Boards = require('../models/boards');


 const createBoard = async (req, res) => {
    let board;
    try {
        board = await Boards.create({
            stage: 1,
            title: req.body.title
          })
    } catch (error) {
        res.status(500).send("Interner server error")
    }
    res.status(201).json(board)
}

 const updateBoard = async (req, res) => {
    let board;
    try {
        await Boards.update({ stage: req.body.stage }, { where: { id: req.params.id } });
    } catch (error) {
        res.status(500).send("Interner server error")
    }
    res.status(201).json(board)
}

module.exports = {
    createBoard,
    updateBoard
}