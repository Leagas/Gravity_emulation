let d = 500
let m = 10
let g = 1
let rate = 1.05
let floor = 0
let limit = 1

function acceleration() {
  g = (g < m) ? g*rate : resistance()
  return g*limit
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
  console.log(update(d))
}, 10)
