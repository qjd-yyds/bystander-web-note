import { isObject } from './tool'
/**
 * @description: 深拷贝
 * @param {any} source
 * @param {WeakMap} cache
 * @return {Object} 返回一个拷贝后的对象
 */
export const deepCopy = (source: any, cache = new Map()) => {
  // 先判断是否是原始类型，直接返回
  if (!isObject(source)) return source
  // 解决循环引用
  if (cache.has(source)) return cache.get(source)
  const resule = Array.isArray(source) ? [] : {}
  cache.set(source, resule)
  for (let key in source) {
    if (isObject(source[key])) {
      resule[key] = deepCopy(source[key], cache)
    } else {
      resule[key] = source[key]
    }
  }
  return resule
}
