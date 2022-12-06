const { response } = require('express');
const GameBoard = require('../models/gameBoards.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

module.exports.findAllGameBoards = (request, response) => {
    GameBoard.find({})
        .then((allGameBoards) => {
            response.json({gameBoards: allGameBoards})
        })
        .catch((err) => {
            response.json({message: "Something went wrong", error: err})
        })
}

module.exports.findOneSingleGameBoard = (req, res) => {
    GameBoard.findOne({_id: req.params.id })
        .then( oneSingleGameBoard => {
            res.json({gameBoard: oneSingleGameBoard})
        })
        .catch((err) => {
            response.json({message: "Something went wrong", error: err})
        })
}

module.exports.createGameBoard = (request, response) => {
    GameBoard.create(request.body)
        .then(gameBoard => response.json(gameBoard))
        .catch(err => {
            response.status(400).json(err);
        });
}


module.exports.updateExistingGameBoard = (req, res) => {
    GameBoard.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true}
    )
        .then(updatedGameBoard => {
            res.json({ gameBoard: updatedGameBoard })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingGameBoard = (req, res) => {
    GameBoard.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
}