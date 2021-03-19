<script>
export default {
  name: 'SliderSwitch',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    isRound: {
      type: Boolean,
      default: true
    },
    inactiveIcon: {
      type: [String, Boolean],
      default: ''
    },
    activeIcon: {
      type: [String, Boolean],
      default: false
    }
  }
}
</script>

<template>
  <div class="switch" @click="$emit('press-button')">
    <span class="text on" v-if="isActive">Stop</span>
    <span :class="['slider', isActive && 'active', isRound && 'round']" />
    <span class="text off" v-if="!isActive">Start</span>
  </div>
</template>

<style lang="scss" scoped>
@import './../styles/design';

$slider-distance: 4px;
$slider-size: 60px;

.slider {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $c-san-juan-blue;
  &::before {
    position: absolute;
    bottom: $slider-distance;
    left: $slider-distance;
    z-index: $z-highlight;
    width: ($slider-size / 2) - $slider-distance;
    height: ($slider-size / 2) - $slider-distance;
    content: '';
    background-color: $c-white;
    transition: transform 0.35s ease-out;
    transform: translateX(0);
  }
}

.slider.active {
  background: $c-eastern-snow-gradient;
}
.slider.active::before {
  transform: translateX(($slider-size / 2) - $slider-distance);
}

.switch {
  position: relative;
  display: inline-block;
  width: $slider-size;
  height: ($slider-size / 2) + $slider-distance;
  cursor: pointer;
}

.slider.round {
  border-radius: ($slider-size / 2) + $slider-distance;
  &::before {
    border-radius: 50%;
  }
}

.text {
  position: absolute;
  top: 50%;
  z-index: $z-page;
  transform: translateY(-50%);
  font-size: $s-m;
  font-weight: bold;
  text-shadow: 0px 0px 2px $c-black;
  &.on {
    right: unset;
    left: $s-xs;
    // color: $c-cod-gray;
  }
  &.off {
    right: $s-xxs;
    left: unset;
  }
}
</style>
