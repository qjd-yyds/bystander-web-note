import { defineComponent, ref } from 'vue'
import deBounce from '../../utils/deBounce'
export default defineComponent({
  name: 'deBounceHoc',
  setup() {
    function test() {
      num.value++
    }
    const widthBounce = deBounce(test, 500)
    const num = ref(0)
    return () => (
      <>
        <button onClick={widthBounce}>使用防抖</button>
        <button onClick={test}>不使用</button>
        <span>{num.value}</span>
      </>
    )
  }
})
