import AgeCalculator from '../src/js/ageCalculator.js'

describe('AgeCalculator', () => {
  test('It should create an object of the class with age paramater', () => {
    let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.age).toEqual(42);
  })

  test('It should calculate mercuryAge', () => {
    let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.calcMercury()).toEqual(170);


  })

});

