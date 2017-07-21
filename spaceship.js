class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.docked = true;
    this.phasersCharge = 'uncharged'
    this.cloaked = false
    this.warpDrive = 'disengaged'
    crew.forEach((crewMember)=>{
      this.docked = false;
      crewMember.currentShip = this;
    })
  }
}
