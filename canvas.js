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

let xPos = Math.random() * window.innerWidth
let yPos = Math.random() * window.innerHeight
let xDir = (Math.random() - 0.5) * 10
let yDir = (Math.random() - 0.5) * 10
let minRadius = 5
let maxRadius = 20
let randRadius = Math.random() * (maxRadius - minRadius) + minRadius

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)

  c.beginPath()
  c.arc(xPos, yPos, randRadius, 0, Math.PI * 2, false)
  c.strokeStyle = `${randColor()}`
  c.stroke()

  if (xPos > innerWidth || xPos < 0) {
    xDir = -xDir
  }
  if (yPos > innerHeight || yPos < 0) {
    yDir = -yDir
  }

  xPos += xDir
  yPos += yDir
}

function randColor() {
  return (
    `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    )`
  )
}

animate()