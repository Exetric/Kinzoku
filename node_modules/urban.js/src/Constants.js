module.exports = {
  BASE_URL: 'https://api.urbandictionary.com/v0',

  ran(array) {
    return array[Math.floor(Math.random() * array.length)];
  },
};
