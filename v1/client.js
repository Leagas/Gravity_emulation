const canvas = document.getElementById('canvas')
const btn = document.getElementById('btn')
const c = canvas.getContext('2d')

btn.addEventListener('click', () => {
  g = 1
  trigger = true
  limit = 1
})

let d = 500
let m = 20
let g = 1
let rate = 1.025
let floor = 0
let limit = 1
let trigger = false

function jumper() {
  jump = (trigger) ? (-1*rate) : g*rate
  return jump
}

function acceleration() {
  g = (g < m) ? jumper() : resistance()
  return g
}

function resistance() {
  limit = (d <= 0) ? 0 : 1
  return m
}

function update() {
  d = (d - acceleration() > 0) ? d - acceleration() : 0
  return {position: (Math.floor(d*100)/100), rate: (Math.floor(g*100)/100), actual: g*limit}
}

setInterval(() => {
  paint(update(d))
}, 10)

function paint(y) {
  console.log(y)
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.rect(20, y.position, 150, 100);
  c.fillStyle = "black";
  c.fill();
}
