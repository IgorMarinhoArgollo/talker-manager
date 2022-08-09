const fs = require('fs/promises');
const reader = require('../helpers/reader');
const { talkerValidation } = require('../helpers/validations');

const baseFile = './talker.json';

const getAllTalkers = async (req, res, next) => {
  try {
    const talkers = await reader();
    if (talkers.length > 0) {
      return res.status(200).json(talkers);
    }
    return res.status(200).json([]);
  } catch (error) {
    next(error);
  }
};

const getTalkerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talkers = await reader();
    const talker = talkers.find((element) => element.id === Number(id));
    if (!talker) {
      return res.status(404).json({ message: 'Talker not found' });
    }
    return res.status(200).json(talker);
  } catch (error) {
    next(error);
  }
};

const createTalker = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const valid = talkerValidation(name, age, talk);
    if (!valid) {
      const talkers = await reader();
      const newId = (talkers.length + 1);
      const toAppend = {
        id: newId,
        name,
        age,
        talk: {
          watchedAt: talk.watchedAt,
          rate: talk.rate,
        },
      };
      await talkers.push(toAppend);
      await fs.writeFile(baseFile, JSON.stringify(talkers));
      await res.status(201).json(toAppend);
    }
    return res.status(valid.code).json({ message: valid.message });
  } catch (error) {
    next(error);
  }
};

const deleteTalker = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talkers = await reader();
    const talker = talkers.find((element) => element.id === Number(id));
    if (!talker) {
      return res.status(404).json({ message: 'Talker not found' });
    }
    const talkersLeft = await talkers.filter((element) => element.id !== Number(id));
    for (let index = 0; index < talkersLeft.length; index += 1) {
      talkersLeft[index].id = index;
    }
    await fs.writeFile(baseFile, JSON.stringify(talkersLeft));
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const updateTalker = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const { id } = req.params;
    const talkers = await reader();
    const talker = talkers.find((element) => element.id === Number(id));
    if (!talker) {
      return res.status(404).json({ message: 'Talker not found' });
    }
    const valid = talkerValidation(name, age, talk);
    if (valid) {
      return res.status(valid.code).json({ message: valid.message });
    }
    talkers[talkers.findIndex((element) => element.id === Number(id))] = {
      name,
      age,
      id: Number(id),
      talk,
    };
    await fs.writeFile(baseFile, JSON.stringify(talkers));
    return res.status(200).json({
      name,
      age,
      id: Number(id),
      talk,
    });
  } catch (error) {
    next(error);
  }
};

const searchTalker = async (req, res, next) => {
  try {
    const { q } = req.query;
    const talkers = await reader();
    const talker = talkers.filter((t) => t.name.toLowerCase().includes(q.toLowerCase()));
    if (talker.length === 0) {
      return res.status(200).json(talkers);
    }
    return res.status(200).send(talker);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  searchTalker,
  createTalker,
  deleteTalker,
  updateTalker,
};
