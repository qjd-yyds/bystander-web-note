setTimeout(_ => {
  console.log('setTimeout')
}, 0)
setImmediate(_ => {
  console.log('setImmediate')
  process.nextTick(_ => {
    console.log('nextTick2')
  })
})
process.nextTick(_ => {
  console.log('nextTick1')
})