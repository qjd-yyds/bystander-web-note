<template>
  <div class="box">
    <div class="front style">前</div>
    <div class="bottom style">底</div>
    <div class="top style">顶</div>
    <div class="left style">左</div>
    <div class="right style">右</div>
    <div class="back style">背</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'box',
  setup: () => {
    return {}
  }
})
</script>

<style scoped lang="scss">
.box {
  width: 50px;
  height: 50px;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1200px;
  color: #fff;
  transition: 4s;
  text-align: center;
  line-height: 50px;

  &:hover {
    .front {
      transform: translateZ(150px);
    }

    .bottom {
      transform: rotateX(-90deg) translateZ(150px);
    }

    .top {
      transform: rotateX(90deg) translateZ(150px);
    }

    .left {
      transform: rotateY(-90deg) translateZ(150px);
    }

    .right {
      transform: rotateY(90deg) translateZ(150px);
    }

    .back {
      transform: translateZ(-150px);
    }
  }
  animation: identifier 3s linear infinite;
  .style {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .front {
    background-color: aqua;
    transform: translateZ(25px);
  }

  .bottom {
    background-color: lightpink;
    transform: rotateX(-90deg) translateZ(25px);
  }

  .top {
    background-color: brown;
    transform: rotateX(90deg) translateZ(25px);
  }

  .left {
    background-color: chartreuse;
    transform: rotateY(-90deg) translateZ(25px);
  }

  .right {
    background-color: cornflowerblue;
    transform: rotateY(90deg) translateZ(25px);
  }

  .back {
    background-color: deeppink;
    transform: translateZ(-25px);
  }
}
@keyframes identifier {
  0% {
    transform: rotateX(0) rotateY(0);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
