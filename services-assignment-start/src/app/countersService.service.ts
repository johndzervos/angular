export class CountersService {
  AtIcounter = 0;
  ItAcounter = 0;

  incrementAtI() {
    this.AtIcounter++;
    console.log(this.AtIcounter)
  }

  incrementItA() {
    this.ItAcounter++;
    console.log(this.ItAcounter)
  }
}