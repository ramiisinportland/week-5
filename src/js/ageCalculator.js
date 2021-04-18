export default class AgeCalculator{
constructor(age) {
    this.age = age;
  }

//Function to calculate the age in Mercury
calcMercury() {
  let mercuryAge = this.age / .24;
  return mercuryAge;
}

calcVenus() {
  let venusAge = this.age /.62;
  return venusAge;
}

}
