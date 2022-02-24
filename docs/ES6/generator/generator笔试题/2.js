//考察 yield* for of 遍历
function gen1() {
  yield 'a'
  yield 'b'
}
function gen2() {
  yield* gen1() // 这个会交出控制权
  yield 'c'
  yield 'd'
}
function gen3() {
  gen1() // 只会执行，但是没有交出控制权
  yield 'c'
  yield 'd'
}
var g2 = gen2()
var g3 = gen3()
for(let v of g2) {
  console.log(v); // 'a' , 'b', 'c' ,'d'
}
for(let v of g3) {
  console.log(v); //'c' 'd'
}