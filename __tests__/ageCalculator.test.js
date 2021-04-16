import AgeCalculator from '../src/js/ageCalculator.js'







describe('AgeCalculator', () => {
let ramiAge;
let earthAge;

    test('Should test if earth age is correct', () => {
    expect(earthAge).toEqual(ramiAge);
  })

   test('Should test if mercuryYear age is correct', () => {
    expect(mercuryYear).toEqual(13);
  })
})
