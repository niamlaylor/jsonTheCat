const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) { 
      callback(error, null); // This is an unsuccessful request
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        callback(null, data[0].description); // This is a successful request where the breed is found
      } else {
        callback(null, 'Not able to find the breed'); // This is a successful request but breed not found
      }
    }
  });
};

module.exports = { fetchBreedDescription };

