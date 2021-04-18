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



// lifeExpectancy Mercury
  test('It should calculate lifeExpectancy in mercury', () => {
    let ageExcpectancyMercury = new AgeCalculator(42, 80);
    expect(ageExcpectancyMercury.calcExcpectancyMercury()).toEqual(333.33333333333337);
  })

  // lifeExpectancy Venus
  test('It should calculate lifeExpectancy in venus', () => {
    let ageExcpectancyVenus = new AgeCalculator(42, 80);
    expect(ageExcpectancyVenus.calcExcpectancyVenus()).toEqual(129.03225806451613);
  })

  // lifeExpectancy Mars
  test('It should calculate lifeExpectancy in mars', () => {
    let ageExcpectancyMars = new AgeCalculator(42, 80);
    expect(ageExcpectancyMars.calcExcpectancyMars()).toEqual(42);
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



