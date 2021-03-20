<script>
import Detune from './Detune.vue'

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export default {
  name: 'Tunner',
  components: {
    Detune
  },
  data () {
    return {
      notes: NOTES
    }
  },
  props: {
    pitch: {
      type: Number,
      default: null
    },
    note: {
      type: Number,
      default: null
    },
    detune: {
      type: Number,
      default: null
    },
    isTunerActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="tuningArea">
    <div :class="['gridOverlay', { play: isTunerActive }]"></div>
    <div class="referenceLine"></div>
    <div class="detuneArea">
      <div class="note">{{ note ? notes[note % 12] : '--' }}</div>
      <Detune :detune="detune" class="detuneArea" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './../styles/design';

.tuningArea {
  position: relative;
  width: 100%;
  height: $tuning-area-size;
  min-height: calc(100vh - 75px);
  max-height: 100vh;
}

.gridOverlay {
  @include center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &.play::before {
    animation-play-state: running;
  }
  &::before {
    @include fill;
    display: inline-block;
    content: '';
    width: 100%;
    height: 100%;
    background: $c-san-juan-blue;
    background-image:
      repeating-linear-gradient($c-white -1px 1px, transparent 1px 100%),
      repeating-linear-gradient(90deg, $c-white -1px 1px, transparent 1px 100%);
    background-size: ($tuning-area-size / 20) ($tuning-area-size / 20);
    background-position: center center;
    opacity: 0.15;
    animation: moveDown 0.5s infinite linear;
    animation-play-state: paused;
  }
  &::after {
    @include fill;
    content: '';
    background-image:
    linear-gradient(to left, transparent 90%, $c-cod-gray 100%),
    linear-gradient(to right, transparent 90%, $c-cod-gray 100%);
  }
}

.referenceLine {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: $z-minus;
  width: 1px;
  height: 100%;
  background: $c-cinnabar;
  transform: translateX(-50%);
  opacity: 0.4;
}

.note {
  font-size: $s-xxxl;
  text-align: center;
  margin-bottom: $s-xxl * 4;
}

.detuneArea {
  position: absolute;
  bottom: $s-l;
  left: 0;
  right: 0;
  width: $tuning-area-size;
  max-width: 100%;
  margin: 0 auto;
}

@include desktop {
  .detuneArea {
    width: $tuning-area-size * 1.5;
  }
  .gridOverlay {
    &::after {
      @include fill;
      content: '';
      background-image:
      linear-gradient(to left, transparent 90%, $c-cod-gray 100%),
      linear-gradient(to right, transparent 90%, $c-cod-gray 100%),
      linear-gradient(to top, transparent 90%, $c-cod-gray 100%),
      linear-gradient(to bottom, transparent 90%, $c-cod-gray 100%);
    }
  }
}
</style>
