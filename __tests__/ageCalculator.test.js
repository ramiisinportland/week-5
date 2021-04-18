import AgeCalculator from '../src/js/ageCalculator.js'

describe('AgeCalculator', () => {
test('It should create an object of the class with age paramater', () => {
  let ageCalculator = new AgeCalculator(42, 80);
  expect(ageCalculator.age).toEqual(42);
  expect(ageCalculator.lifeExpectancy).toEqual(80);
  })

test('It should calculate mercuryAge', () => {
    let ageCalculator = new AgeCalculator(42);
    expect(ageCalculator.calcMercury()).toEqual(175);
  })

test('It should calculate venusAge', () => {
  let ageCalculator = new AgeCalculator(42);
  expect(ageCalculator.calcVenus()).toEqual(67.74193548387098);
})

test('It should calculate marsAge', () => {
  let ageCalculator = new AgeCalculator(42);
  expect(ageCalculator.calcMars()).toEqual(22.340425531914896);
})

test ('It should calculate jupiterAge', () => {
  let ageCalculator = new AgeCalculator (42);
  expect(ageCalculator.calcJupiter()).toEqual(3.5413153456998314);
})
});



