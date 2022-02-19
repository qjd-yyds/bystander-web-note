import { defineComponent } from 'vue'
import deBounce from '../../utils/deBounce'
export default defineComponent({
  name: 'deBounceHoc',
  setup() {
    function test() {
      console.log('click')
    }
    const widthBounce = deBounce(test, 500)
    return () => (
      <>
        <button onClick={widthBounce}>
          使用防抖
        </button>
        <button onClick={test}>不使用</button>
      </>
    )
  }
})
