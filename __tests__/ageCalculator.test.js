import AgeCalculator from '../src/js/ageCalculator.js'







describe('AgeCalculator', () => {
let ramiAge;
let ageCalculator;


  test('Should creat a new class AgeCalculator', () => {
    //let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.presentYear).toEqual(ramiAge);
  })
})