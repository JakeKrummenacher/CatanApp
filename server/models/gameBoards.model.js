const mongoose = require('mongoose');

const GameBoardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Game board must have a first name"
        ]
    },
    values: {
        type: [String]
    }
}, { timestamps: true });
module.exports = mongoose.model('GameBoard', GameBoardSchema);