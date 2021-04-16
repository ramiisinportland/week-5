import AgeCalculator from '../src/js/ageCalculator.js'


describe('AgeCalculator', () => {
  test('Should creat a new class AgeCalculator', () => {
    let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.presentYear).toEqual(42);
  })

  test('Should test if mercuryYear is correct compaired to AgeCalculator', () => {
    let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.mercuryYear).toEqual(42);
  })


test('Should test if venusYear is correct compaired to AgeCalculator', () => {
    let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.venusYear).toEqual(42);
  })

test('Should test if marsYear is correct compaired to AgeCalculator', () => {
    let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.marsYear).toEqual(40)
  })

  

})