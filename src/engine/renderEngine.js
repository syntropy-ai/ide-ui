const sendState = (state, frame) => {
  if (typeof frame !== 'object') {
    console.log('No contentWindow')
    return
  }
  frame.contentWindow.postMessage(
    {
      type: 'state-update',
      state
    },
    '*'
  )
}

export { sendState }
