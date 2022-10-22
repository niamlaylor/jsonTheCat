const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) {
    console.log('There was an error: ', error);
  }
  const data = JSON.parse(body);
  if (!data.length) {
    console.log('Breed not found!');
  } else {
    console.log(data[0].description);
  }
});