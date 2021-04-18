import AgeCalculator from '../src/js/ageCalculator.js'

describe('AgeCalculator', () => {
  test('It should create an object of the class with age paramater', () => {
    let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.age).toEqual(20);
  })
});

