<script setup>
import { computed } from 'vue';

const props = defineProps({
  percentage: {
    type: Number,
    required: true
  }
})

var randomColour = computed(() => {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
})

const cssTransformRotateValue = computed(() => {
  const percentageAsFraction = props.percentage / 100
  const halfPercentage = percentageAsFraction / 2

  return `${halfPercentage}turn`
})

</script>

<template>
  <div class="gauge__outer">
    <div class="gauge__inner">
      <div class="gauge__fill" :style="{ transform: `rotate(${cssTransformRotateValue})`
    , background: `${randomColour}` }"></div>
      <div class="gauge__cover">
        {{ percentage.toFixed(0) }}%
      </div>
    </div>
  </div>
</template>

<style scoped>
.gauge__outer {
  width: 100px;
  max-width: 100px;
}

.gauge__inner {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background: #b4c0be;
  position: relative;
  border-top-left-radius: 100% 200%;
  border-top-right-radius: 100% 200%;
  overflow: hidden;
}

.gauge__fill {
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: 100%;
  background: pink;
  transform-origin: center top;
  transform: rotate(0turn);
  transition: transform 0.2s ease-out;
}

.gauge__cover {
  width: 75%;
  height: 150%;
  background: #ffffff;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;

  /* Text */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25%;
  box-sizing: border-box;
  font-family: 'Lexend', sans-serif;
  font-weight: bold;
  font-size: 12px;
}
</style>
