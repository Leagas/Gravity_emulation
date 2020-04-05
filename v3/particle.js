// see below link for verlet integration
// http://buildnewgames.com/gamephysics/ reference for more adv principles
const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

class Particle {
  constructor(x, e) {
    this.x = x,
    this.y = 0,
    this.vy = 0,
    this.ay = 0,
    this.m = 0.1,
    this.r = 10,
    this.dt = 0.02,
    this.e = e
    this.fy = 0,
    this.dy = 0,
    this.new_ay = 0,
    this.avg_ay = 0
  }

  update() {
    this.fy = 0
    this.fy += this.m * 9.764;
    this.dy = this.vy * this.dt
    this.y += this.dy * 100
    this.new_ay = this.fy / this.m
    this.avg_ay = 0.5 * (this.new_ay + this.ay)
    this.vy += this.avg_ay * this.dt

    if (this.y + this.r > canvas.height && this.vy > 0) {
      this.vy *= this.e
      this.y = canvas.height - this.r
    }
  }
}

function paint(objects) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  objects.forEach((mass,index) => {
    c.beginPath();
    c.arc(mass.x, mass.y, mass.r, 0, Math.PI * 2, true);
    c.fillStyle = `#e3${index}`;
    c.fill();
  })
}

function create(objects) {
  setInterval(() => {
    objects.forEach(mass => mass.update())
    paint(objects)
  }, 0.02 * 1000)
}

let objects = [...new Array(50)].map((item, index) => {
  return new Particle(index*10, -0.5*(index/25))
})

create(objects)
