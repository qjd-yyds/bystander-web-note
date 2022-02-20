import { defineComponent, ref } from 'vue'
import deBounce from '../../utils/deBounce'
import { ElButton, ElSwitch } from 'element-plus'
export default defineComponent({
  name: 'deBounceHoc',
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
          activeText="防抖"
          inactiveText="不防抖"
        ></ElSwitch>
        <ElButton
          style="margin-left:10px"
          onClick={state.value ? deBounce(test, 500) : test}
        >
          {num.value}
        </ElButton>
      </>
    )
  }
})
