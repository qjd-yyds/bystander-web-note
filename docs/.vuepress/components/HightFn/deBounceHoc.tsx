import { defineComponent, ref } from 'vue'
import deBounce from '../../utils/deBounce'
import { ElButton, ElSwitch } from 'element-plus'
import { deepCopy } from '../../utils'
export default defineComponent({
  name: 'deBounceHoc',
  setup() {
    function test() {
      num.value++
    }
    const state = ref(true)
    const num = ref(0)
    const list = {
      a: {
        a: 1,
        b: 2
      },
      c: Symbol('c'),
      b: 12
    }
    const res = deepCopy(list);
    console.log(res);
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
