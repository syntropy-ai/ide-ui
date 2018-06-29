// For now these are just globals, will need to figure out
// the best way to import them properly (if that's necessary)

var c, ctx

function init(state) {
  c = document.getElementById('c')
  ctx = c.getContext('2d')
  document.getElementById('c')
  c.width = c.height = 500
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, 500, 500)
  ctx.fillStyle = 'white'
}

function run(state) {
  ctx.fillRect(state.x * 500, state.y * 500, 1, 1)
}
