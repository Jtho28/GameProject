let startX = 10;
let startY = 300;
let offsetX = 50;
let width = 100;
let height = 100;
let max = 1;
let maxWidth = 100;
let maxSpeed = 100

class RectangleUpdateComponent extends Component {
  constructor(parent, x, y, w, h, r, g, b, percent) {
    super(parent);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.percent = percent;
  }
  update() {
    this.b = 100;
    if (forwardV)
    {
      //this.b = 255;
      this.y += 0
      this.x += maxSpeed - (this.percent / 100)
      forwardV = false
    }
    else if (backwardV)
    {
      this.x -= maxSpeed - (this.percent / 100)
      backwardV = false
    }
    else if (upV)
    {
      this.y -= maxSpeed - (this.percent / 100)
      upV = false
    }
    else if (downV)
    {
      this.y += maxSpeed - (this.percent / 100)
      downV = false
    }

    let h = (1 - (this.percent) * height);

    let percentSquared = this.percent * this.percent;
    this.y = startY - 50 - this.h / 2 + ease(Time.timePassed) * 50 * percentSquared;
    
  }

  mouseEvent()
  {
    console.log("Mouse Event")
  }
}