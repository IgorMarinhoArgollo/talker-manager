const fs = require('fs/promises');

const baseFile = './talker.json';

const reader = async () => {
  try {
    const raw = await fs.readFile(baseFile);
    const result = await JSON.parse(raw);
    return (result);
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = reader;
