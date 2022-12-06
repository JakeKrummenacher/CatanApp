const GameBoardController = require('../controllers/gameBoards.controller');

module.exports = (app) => {
    app.get('/api', GameBoardController.index);
    app.get('/api/gameBoards', GameBoardController.findAllGameBoards)
    app.get('/api/gameBoards/:id', GameBoardController.findOneSingleGameBoard)
    app.put('/api/gameBoards/:id', GameBoardController.updateExistingGameBoard)
    app.post('/api/gameBoards', GameBoardController.createGameBoard);
    app.delete('/api/gameBoards/:id', GameBoardController.deleteAnExistingGameBoard)
}