class Game {
  constructor(){
    this.is_complete = false
  }

  complete(){
    this.is_complete = true
  }

  restart(){
    this.is_complete = false
  }
}
