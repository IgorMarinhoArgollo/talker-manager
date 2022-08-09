const express = require('express');
const auth = require('../middlewares/authValidator');
const {
  getAllTalkers,
  getTalkerById,
  searchTalker,
  createTalker,
  deleteTalker,
  updateTalker,
} = require('../services/talker.service');

const talkerRouter = express.Router();

talkerRouter.get('/', auth, getAllTalkers);
talkerRouter.get('/search', auth, searchTalker);
talkerRouter.get('/:id', auth, getTalkerById);
talkerRouter.post('/', auth, createTalker);
talkerRouter.delete('/:id', auth, deleteTalker);
talkerRouter.put('/:id', auth, updateTalker);

module.exports = talkerRouter;
