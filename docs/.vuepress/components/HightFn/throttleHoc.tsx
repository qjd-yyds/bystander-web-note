import { defineComponent, ref } from 'vue'
import throttle from '../../utils/throttle'
import { ElButton, ElSwitch } from 'element-plus'
export default defineComponent({
  name: 'throttleHoc',
  setup() {
    function test() {
      num.value++
    }
    const state = ref(true)
    const num = ref(0)
    return () => (
      <>
        <ElSwitch
          modelValue={state.value}
          onChange={(val: any) => {
            state.value = val
          }}
          activeText="节流"
          inactiveText="不节流"
        ></ElSwitch>
        <ElButton
          style="margin-left:10px"
          onClick={state.value ? throttle(test, 500) : test}
        >
          {num.value}
        </ElButton>
      </>
    )
  }
})
