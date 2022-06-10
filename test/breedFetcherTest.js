const { fetchBreedDescription} = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, description) => {
      assert.equal(error,null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, description.trim());

      done();
    });
    
  });
  it('returns Error for an invalid breed, via callback', (done) => {
    fetchBreedDescription('Julia', (error, description) => {
      assert.equal(error,null);

      const expectedDesc = "Uncaught TypeError: Cannot read properties of undefined (reading 'description')";

      assert.equal(expectedDesc, description.trim());

      done();
    });
    
  });
});