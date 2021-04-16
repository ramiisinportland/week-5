import AgeCalculator from '../src/js/ageCalculator.js'


describe('AgeCalculator', () => {
  test('Should creat a new class AgeCalculator', () => {
    let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.presentYear).toEqual(40)
  })
})