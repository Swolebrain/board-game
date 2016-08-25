export default class Player{
  constructor(e, name){
    this.name = name;
    this.htmlElement = e;
    this.pos=0;
  }
  moveOne(){
    let c = ++this.pos;
    let loc = document.getElementById('cell'+c).getBoundingClientRect();
    //loc: {top: _, left: _, width: _, height: _, right: _, bottom: _}
    this.htmlElement.style.top = loc.top+'px';
    //$(this.htmlElement).css("top", loc.top+"px");
    this.htmlElement.style.left = loc.left+'px';
    //$(this.htmlElement).css("left", loc.left+'px');
  }
  moveSquares(n){
    let self = this;
    let dest = this.pos+n;
    const cb = function(){
      if (self.pos === 27){
        alert(self.name+" wins!");
        return;
      }
      else if (self.pos === dest){
        return;
      }
      else{
        self.moveOne()
        setTimeout(cb, 500);
      }
    }
    cb();
  }
}
