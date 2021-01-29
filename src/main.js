const { game, vec2, mouse } = require('@erikwatson/bramble')
const { lineVsRect } = require('./aabb')

const container = document.querySelector('#container')
const g = game.create()
const m = mouse.create()

const level = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 2, 2, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 2, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 2, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 2, 0, 0, 2, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

const canvasSize = {
  width: 1280,
  height: 720
}

const tileSize = 24

const columnWidth = 10
const screenInColumns = Math.ceil(canvasSize.width / columnWidth)

const hero = {
  position: vec2.create(
    (tileSize * (level[0].length / 2)), 
    tileSize * (level.length / 2)
  ),
  angle: -90
}

function shadeColor(color, percent) {
  let R = parseInt(color.substring(1,3),16);
  let G = parseInt(color.substring(3,5),16);
  let B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R < 255) ? R : 255;  
  G = (G < 255) ? G : 255;  
  B = (B < 255) ? B : 255;  

  let RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  let GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  let BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

  return `#${RR}${GG}${BB}`;
}

function toRadians (degrees) {
  return degrees * (Math.PI / 180)
}

function range (from, to, length) {
  const range = Math.abs(from - to)
  const step = range / (length - 1)
  
  let result = []

  for (let i = 0; i < length; i++) {
    result.push(from + (i * step))
  }

  return result
}

function getRays (fov, horizon, columns) {
  let result = []

  let from = -(fov / 2)
  let to = fov / 2

  let steps = range(from, to, screenInColumns)

  return steps.map(angle => {
    const theta = toRadians(hero.angle + angle)

    return {
      from: hero.position,
      to: {
        x: hero.position.x + horizon * Math.cos(theta),
        y: hero.position.y + horizon * Math.sin(theta)
      }
    }
  })
}

g.attachTo(container)
g.setSize(1280, 720)

let collisions = []

g.setUpdate(dt => {
  hero.angle += 1

  collisions = []

  const rays = getRays(60, 150, screenInColumns)

  rays.forEach(line => {
    const collisionCandidates = []

    level.forEach((row, y) => {
      level[y].forEach((col, x) => {
        if (level[y][x] !== 0) {
          collisionCandidates.push({
            x: x * tileSize,
            y: y * tileSize,
            width: tileSize,
            height: tileSize,
            type: level[y][x]
          })
        }
      })
    })

    const collision = collisionCandidates
      .map(rect => {
        return {
          ray: line,
          rect, 
          collision: lineVsRect(line, rect) 
        }
      })
      .filter(collision => collision.collision !== false)
      .sort((a, b) => a.collision.timeOfCollision > b.collision.timeOfCollision)[0]

    collisions.push(collision)
  })
})

g.setRender(gfx => {
  gfx.clear('#232323')
  
  // draw a "floor"
  gfx.rect({ x: 0, y: canvasSize.height / 2 }, { width: canvasSize.width, height: canvasSize.height / 2}, { fill: { colour: '#4c2008' } }) 

  // draw a "ceiling"
  gfx.rect({ x: 0, y: 0 }, { width: canvasSize.width, height: canvasSize.height / 2}, { fill: { colour: '#308dcc' } })
 

  // draw the walls 

  collisions.forEach(({ collision, rect, ray }, i) => {
    if (!collision) { return }

    const rayAngle = Math.atan2(
      ray.to.y - ray.from.y,
      ray.to.x - ray.from.x
    )

    const correctedAngle = rayAngle - toRadians(hero.angle)
    const newDistance = collision.timeOfCollision * Math.cos(correctedAngle)

    var height = (0.24 * canvasSize.height) / newDistance
    let colour = (rect.type === 2) ? '#800080' : '#FFEF00'

    const shade = Math.round(newDistance * 100)
    colour = shadeColor(colour, 50 - shade)

    gfx.rect(
      { x: i * columnWidth, y: (canvasSize.height - height) / 2 },
      { width: columnWidth, height: height },
      { fill: { colour } }
    )
  })

  // draw the minimap
  gfx.rect(
    { x: 0, y: 0 },
    { width: level[0].length * tileSize, height: level.length * tileSize },
    { fill: { colour: 'black' } }
  )

  // draw the collisions 
  collisions.forEach(collision => {
    if (!collision) { return }

    const rect = collision.rect
    collision = collision.collision

    if (collision) {
      gfx.line(hero.position, collision.near, { colour: 'red' })
    } else {
      gfx.line(hero.position, collision.to, { colour: 'white' })
    }
  })
  
  level.forEach((row, y) => {
    row.forEach((column, x) => {
      switch (level[y][x]) {
        case 1:
          gfx.square(
            { x: x * tileSize, y: y * tileSize }, 
            tileSize,
            { fill: { colour: '#FFEF00' } }
          )
          break

        case 2: 
          gfx.square(
            { x: x * tileSize, y: y * tileSize }, 
            tileSize,
            { fill: { colour: '#800080' } }
          )
          break

        default: break
      }

      gfx.line(
        { x: x * tileSize, y: 0 },
        { x: x * tileSize, y: level.length * tileSize },
        { colour: '#999999' }
      )   
    })

    gfx.line(
      { x: 0, y: y * tileSize },
      { x: row.length * tileSize, y: y * tileSize },
      { colour: '#999999' }
    )
  })

  // draw the hero 
  gfx.circle(hero.position, 8)

  // x: hero.position.x + horizon * Math.cos(theta),
  // y: hero.position.y + horizon * Math.sin(theta)

  gfx.line(
    hero.position, 
    { 
      x: hero.position.x + 15 * Math.cos(toRadians(hero.angle)), 
      y: hero.position.y + 15 * Math.sin(toRadians(hero.angle))
    },
    { colour: 'white' }
  )
})

g.start()