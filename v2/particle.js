const canvas = document.getElementById('canvas')
const btn = document.getElementById('btn')
const c = canvas.getContext('2d')

const rate = 100

class Mass {
  constructor() {
    this.x = 200
    this.y = 500
    this.a = (9.764/rate) * 1
    this.t = 53
    this.v = 0
    this.floor = 0
  }

  update() {
    this.v = this.v + this.a
    this.y = this.y - this.v

    if (this.y <= this.floor) {
      this.v = this.v * -0.5
      this.y = this.y - this.v
    }
  }

  report() {
    let data = { y: this.y, x: this.x}
    console.log(this.y, this.v)
    return data
  }
}

function paint(data) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.arc(data.x, data.y, 50, 0, Math.PI * 2, true);
  c.fillStyle = "black";
  c.fill();
}

mass = new Mass()

setInterval(() => {
  mass.update()
  paint(mass.report())
},1000/rate)
