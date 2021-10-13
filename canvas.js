let canvas = document.querySelector('canvas')
// console.log(canvas)

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

// c.fillRect(100, 100, 100, 100)

for (let i  = 0; i < 10000; i++) {
  let xPos = Math.random() * window.innerWidth
  let yPos = Math.random() * window.innerHeight
  let minRadius = 5
  let maxRadius = 20
  let randRadius = Math.random() * (maxRadius - minRadius) + minRadius

  c.beginPath()
  c.arc(xPos, yPos, randRadius, 0, Math.PI*2, false)
  c.strokeStyle = `${randColor()}`
  c.stroke()
} 

function randColor () {
  return (
    `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    )`
  )
}