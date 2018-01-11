class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    return Math.abs(this.startDate.getFullYear() - year)
  }
}


class Route {
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  horizontalBlocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return Math.abs(eastWest.indexOf(this.beginningLocation['horizontal']) - eastWest.indexOf(this.endingLocation['horizontal']))
  }
  verticalBlocksTravelled(){
    return Math.abs(this.beginningLocation['vertical'] - this.endingLocation['vertical'])
  }
  blocksTravelled(){
    return this.verticalBlocksTravelled() + this.horizontalBlocksTravelled()
  }

  estimatedTime(peakHours = false){
    return peakHours ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3
  }
}
