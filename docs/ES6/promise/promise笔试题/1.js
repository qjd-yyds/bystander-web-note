// 1,3,7,9,0,2,8,4,5,6
async function async1() {
  console.log(1)
  console.log(await async2())
  console.log(2)
}
async function async2() {
  console.log(3)
  return 0
}

setTimeout(() => {
  console.log(4)
  new Promise(resolve => {
    console.log(5)
    resolve()
  }).then(() => {
    console.log(6)
  })
})

async1()

new Promise(resolve => {
  console.log(7)
  resolve()
}).then(() => {
  console.log(8)
})

console.log(9);