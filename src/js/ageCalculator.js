export default class AgeCalculator{
constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  // Life expectancy Mercury
  calcExcpectancyMercury() {
    let mercuryExcpectancy = this.lifeExpectancy /.24;
    return mercuryExcpectancy;
  }

  // Life expectancy Venus
 calcExcpectancyVenus () {
  let venusExcpectancy = this.lifeExpectancy / .62;
  return venusExcpectancy;
 }

 // Life expectancy Mars
 calcExcpectancyMars () {
  let marsExcpectancy = this.lifeExpectancy / 1.88;
  return marsExcpectancy;
 }


 // Life expectancy Jupiter
  calcExcpectancyJupiter () {
  let jupiterExcpectancy = this.lifeExpectancy / 11.86;
  return jupiterExcpectancy;
 }



//Function to calculate the age in Mercury
calcMercury() {
  let mercuryAge = this.age / .24;
  // 1  mercury year = ----> 0.24 earth year
  // x mercury year <------ 1 earth year
  // X * .24 = 1 * 1
  return mercuryAge;
}

calcVenus() {
  let venusAge = this.age /.62;
  return venusAge;
}

calcMars() {
  let marsAge = this.age / 1.88;
  return marsAge;
}

calcJupiter() {
  let jupiterAge = this.age/ 11.86;
  return jupiterAge;
}


}
