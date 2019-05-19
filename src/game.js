class Game {
  constructor(is_complete){
    this.is_complete = is_complete
  }

  complete(){
    this.is_complete = true
  }

  restart(){
    this.is_complete = false
  }
}
