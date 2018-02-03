const expect = require('chai').expect;
const { capitalizeWord } = require('../src');

const inputs = {
  lowerCaseWord: 'word',
  capitalizedWord: 'Word',
  allCapsWord: 'WORD'
};

describe('capitalizeWord', function() {
  it('should exist as a function', function() {
    expect(capitalizeWord).to.exist;
    expect(capitalizeWord).to.be.a('function');
  });

  it('should capitalize the first letter', function() {
    expect(capitalizeWord(inputs.lowerCaseWord)).to.eq(inputs.capitalizedWord);
  });

  it('should capitalize the first letter and change the rest to lower case', function() {
    expect(capitalizeWord(inputs.allCapsWord)).to.eq(inputs.capitalizedWord);
  });

  it('should return the same string if input is already capitalized', function() {
    expect(capitalizeWord(inputs.capitalizedWord)).to.eq(inputs.capitalizedWord);
  });
});

module.exports.inputs = inputs;
