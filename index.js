const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) { // If an error found when the callback runs, log the error details
    console.log('Error fetch details:', error);
  } else { // If no error found when the callback runs, log the description returned by the callback
    console.log(desc);
  }
});