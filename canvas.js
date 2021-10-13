let canvas = document.querySelector('canvas')
// console.log(canvas)

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

// c.fillRect(100, 100, 100, 100)

// for (let i  = 0; i < 10000; i++) {
//   let xPos = Math.random() * window.innerWidth
//   let yPos = Math.random() * window.innerHeight
//   let minRadius = 5
//   let maxRadius = 20
//   let randRadius = Math.random() * (maxRadius - minRadius) + minRadius

//   c.beginPath()
//   c.arc(xPos, yPos, randRadius, 0, Math.PI*2, false)
//   c.strokeStyle = `${randColor()}`
//   c.stroke()
// } 

let mousePos = {
  x: null,
  y: null
}
let circleCount = 1000
let aoe = 50
let maxRad = 40
let growthRate = 4
let shrinkRate = 0.5

window.addEventListener('mousemove',
  function(e) {
    mousePos.x = e.x
    mousePos.y = e.y

  }
)

function Circle(x, y, xd, yd, rad) {
  this.x = x
  this.y = y
  this.xd = xd
  this.yd = yd
  this.rad = rad
  this.originalRad = rad
  this.color = randColor()

  this.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false)
    // c.strokeStyle = this.color
    // c.stroke()
    c.fillStyle = this.color
    c.fill()
  }

  this.update = function() {
    if (this.x > innerWidth || this.x < 0) {
      this.xd = -this.xd
    }
    if (this.y > innerHeight || this.y < 0) {
      this.yd = -this.yd
    }
  
    this.x += this.xd
    this.y += this.yd

    if (mousePos.x - this.x < aoe && mousePos.x - this.x > -aoe && mousePos.y - this.y < aoe && mousePos.y - this.y > -aoe) {
      if (this.rad < maxRad) {
        this.rad += growthRate
      }
    } else {
      if (this.rad > this.originalRad) {
        this.rad -= shrinkRate
      }
    }

    this.draw()
  }
}

let circles = []

for (let i = 0; i < circleCount; i++) {
  let xPos = Math.random() * window.innerWidth
  let yPos = Math.random() * window.innerHeight
  let xDir = (Math.random() - 0.5) * 5
  let yDir = (Math.random() - 0.5) * 5
  let minInitRadius = 2
  let maxInitRadius = 5
  let randRadius = Math.random() * (maxInitRadius - minInitRadius) + minInitRadius

  var circle = new Circle (xPos, yPos, xDir, yDir, randRadius)

  circles.push(circle)
}

// console.log(circles)

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)

  for (let i = 0; i < circles.length; i++) {
    circles[i].update()
  }
  // c.beginPath()
  // c.arc(xPos, yPos, randRadius, 0, Math.PI * 2, false)
  // c.strokeStyle = `${randColor()}`
  // c.stroke()

  // if (xPos > innerWidth || xPos < 0) {
  //   xDir = -xDir
  // }
  // if (yPos > innerHeight || yPos < 0) {
  //   yDir = -yDir
  // }

  // xPos += xDir
  // yPos += yDir
}

function randColor() {
  return (
    // `rgb(
    //   ${Math.floor(Math.random() * 256)},
    //   ${Math.floor(Math.random() * 256)},
    //   ${Math.floor(Math.random() * 256)}
    // )`
    `rgba(
      255, 150, 200,
      ${Math.random()}
    )`
  )
}

animate()