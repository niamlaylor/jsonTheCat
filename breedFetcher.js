const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        callback(null, data[0].description);
      } else {
        callback(null, 'Not able to find the breed');
      }
    }
  });
};

module.exports = { fetchBreedDescription };

