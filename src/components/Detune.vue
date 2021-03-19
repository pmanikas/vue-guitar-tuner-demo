<script>
export default {
  name: 'Detune',
  props: {
    detune: {
      type: Number,
      default: null,
    },
  },
};
</script>

<template>
  <div class="detune">
    <span>&#9837;</span>
    <span
      :class="['detuneTip', Math.abs(detune) < 5 ? 'tuned' : 'outOfTune']"
      :style="{ transform: `translateX(${detune * 2 || 0}px)` }"
    >
      {{ detune }}
    </span>
    <span>&#9839;</span>

  </div>
</template>

<style lang="scss" scoped>
  @import "./../styles/design";

  .detune {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-around;
    color: $c-silver;
  }

  .detuneTip {
    position: relative;
    z-index: $z-highlight;
    display: flex;
    align-items: center;
    justify-content: center;
    width: $s-xl;
    height: $s-xl;
    margin-top: -#{$s-xxxl};
    background: $c-silver;
    border: 2px solid $c-silver;
    border-radius: 50%;
    transition: transform .3s ease-out;
    color: $c-cod-gray;
    &.tuned {
      background: $c-snowy-mint;
    }
    &.outOfTune {
      background: $c-salmon;
    }
    &::before {
      position: absolute;
      top: $s-xl - 0.5;
      right: 0;
      left: 0;
      z-index: $z-page;
      content: '';
      width: 0;
      height: 0;
      margin: 0 auto;
      border-left: $s-xl / 4 solid transparent;
      border-right: $s-xl / 4 solid transparent;
      border-top: $s-xl / 1.5 solid $c-silver;
    }
  }
</style>
