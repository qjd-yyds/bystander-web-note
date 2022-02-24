// 考察yield，next方法，带参数的next方法
function* gen() {
  var a = yield 'a'
  var b = yield a + 'b'
  return b
}
var g = gen()
console.log(g.next()) // {done:false,value:'a'}
console.log(g.next('c')) //  {done:false,value:'cb'}
console.log(g.next()) // {done:true,value:undefined} // 没有yield 所以是undefined
