<template>
  <div class="infinite-list-container" ref="container" @scroll="handleMove">
    <div
      class="infinite-list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <ul class="infinite-list" :style="getTransform">
      <li
        class="infinite-list-item"
        v-for="(item, index) of visibleData"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
const props = defineProps({
  list: {
    type: Array
  }
})
const list = props.list
const screenHeight = ref(0) // 可视区高度
const start = ref(0) // 起始索引
const end = ref(null) // 结束索引
const startOffset = ref(0) // 偏移量

const container = ref(null) // 容器
const itemSize = ref(50) // 每一项的高度
const visibleData = computed(() => {
  let start1 = start.value - aboveCount.value
  let end1 = end.value + belowCount.value
  // return list.slice(start.value, Math.min(end.value, list.length));
  return list.slice(start1, end1) // 添加缓冲区
})
const listHeight = computed(() => list.length * itemSize.value) // 容器总高度
// 移动的距离
const getTransform = computed(() => {
  return {
    // 偏移量
    transform: `translate3d(0,${startOffset.value}px,0)`
  }
})
// 最大显示的item个数
const visibleCount = computed(() =>
  Math.ceil(screenHeight.value / itemSize.value)
)
// 监听滚动事件
const handleMove = (e: any) => {
  const scrollTop = e.target.scrollTop
  // 获取当前的开始的起始位置
  start.value = Math.floor(scrollTop / itemSize.value)
  end.value = start.value + visibleCount.value
  startOffset.value = scrollTop - (scrollTop % itemSize.value)
}
const bufferScale = ref(1) // 缓冲区
const aboveCount = computed(() => {
  return Math.min(start.value, bufferScale.value * visibleCount.value)
})
const belowCount = computed(() => {
  return Math.min(
    list.length - end.value,
    bufferScale.value * visibleCount.value
  )
})
onMounted(() => {
  screenHeight.value = container.value.clientHeight
  end.value = start.value + visibleCount.value
})
</script>
<style scoped>
.infinite-list-container {
  position: relative;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.infinite-list-phantom {
}
.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}
.infinite-list-item {
  list-style: none;
  height: 50px;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
  padding: 0 10px;
  background: pink;
}
</style>
