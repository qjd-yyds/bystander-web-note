export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
