var rendererId = 'abc' // <-- this needs to be set through postMessage from parent
var state = {}
var hasInitialised = false
var isRunning = false

if (typeof init !== 'function') {
  init = function() {
    console.log('No init function defined')
  }
}

if (typeof run !== 'function') {
  run = function() {
    console.log('No run function defined')
  }
}

window.parent.postMessage(
  {
    type: 'renderer-available',
    frame: rendererId
  },
  window.origin
)

setInterval(function() {
  window.parent.postMessage(
    {
      type: 'frame-height',
      frame: rendererId,
      height: document.documentElement.scrollHeight
    },
    window.origin
  )
}, 500)

window.addEventListener('message', receiveMessage, false)

function receiveMessage(event) {
  switch (event.data.type) {
    case 'state-update':
      updateState(event.data.state)
      break
    default:
      break
  }
}

function updateState(newState) {
  state = newState
  if (!hasInitialised) {
    init(state)
    hasInitialised = true
  }
  if (!isRunning) {
    runRenderer()
    isRunning = true
  }
}

function runRenderer() {
  run(state)
  requestAnimationFrame(runRenderer)
}
