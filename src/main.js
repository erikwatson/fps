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
  position: vec2.create(32, 32)
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
    const theta = toRadians(angle)


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

  hero.position.y ++
  hero.position.x ++ 

  collisions = []

  const rays = getRays(90, 150, screenInColumns)

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
 
  // draw in 3d
  
  collisions.forEach((collision, i) => {
    if (!collision) { return }
    
    const rect = collision.rect
    collision = collision.collision

    var height = canvasSize.height - (canvasSize.height * collision.timeOfCollision)
    let colour = (rect.type === 2) ? 'purple' : 'yellow'

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

  level.forEach((row, y) => {
    row.forEach((column, x) => {
      switch (level[y][x]) {
        case 1:
          gfx.square(
            { x: x * tileSize, y: y * tileSize }, 
            tileSize,
            { fill: { colour: 'yellow' } }
          )
          break

        case 2: 
          gfx.square(
            { x: x * tileSize, y: y * tileSize }, 
            tileSize,
            { fill: { colour: 'purple' } }
          )
          break

        default: break
      }      
    })
  })

  // draw the hero 
  gfx.circle(hero.position, 8)

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
})

g.start()