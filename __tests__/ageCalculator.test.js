import AgeCalculator from '../src/js/ageCalculator.js'







describe('AgeCalculator', () => {
let ramiAge;
let earthAge;


  test('Should test if earth age is correct', () => {
    //let ageCalculator = new AgeCalculator(42);
    expect(earthAge).toEqual(ramiAge);
  })
})