export default class AgeCalculator{
constructor(age) {
    this.age = age;
  }

//Function to calculate the age in Mercury
calcMercury() {
  let mercuryAge = this.age/ .42;
  return mercuryAge;
}


  
}
