type Fn = (...args: any) => any
class PubSub {
  events: Record<string, Fn[]>
  constructor() {
    this.events = {}
  }
  // 发布事件
  publish(eventName: string, data?: any[]) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(fn => {
        fn.apply(this, data)
      })
    }
  }
  // 订阅事件
  subscribe(eventName: string, callback: Fn) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }
  // 取消订阅
  unSubscribe(eventName: string, callback: Fn) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        fn => fn !== callback
      )
    }
  }
}

export default { PubSub }
