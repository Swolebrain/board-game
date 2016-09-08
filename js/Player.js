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
    let dest = this.pos+n;
    const cb = ()=>{
      if (this.pos === 27){
        alert(this.name+" wins!");
        return;
      }
      else if (this.pos === dest){
        return;
      }
      else{
        this.moveOne()
        setTimeout(cb, 500);
      }
    }
    cb();
  }
}
