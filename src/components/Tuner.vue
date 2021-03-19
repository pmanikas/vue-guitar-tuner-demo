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
    isPlaying: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="tuningArea">
    <div :class="['gridOverlay', { play: isPlaying }]"></div>
    <div class="referenceLine"></div>
    <div class="note">{{ note ? notes[note % 12] : '' }}</div>
    <Detune :detune="detune" class="detuneArea" />
  </div>
</template>

<style lang="scss" scoped>
@import './../styles/design';

.tuningArea {
  position: relative;
  width: 100%;
  height: $tuning-area-size;
}

.gridOverlay {
  @include center;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 45px $c-cod-gray;
  overflow: hidden;
  &.play::before {
    animation-play-state: running;
  }
  &::before {
    @include fill;
    display: inline-block;
    content: '';
    width: $tuning-area-size;
    height: $tuning-area-size;
    background-image: repeating-linear-gradient($c-white -1px 1px, transparent 1px 100%),
      repeating-linear-gradient(90deg, $c-white -1px 1px, transparent 1px 100%);
    background-size: ($tuning-area-size / 20) ($tuning-area-size / 20);
    opacity: 0.15;
    animation: moveDown 0.3s infinite linear;
    animation-play-state: paused;
  }
  &::after {
    @include fill;
    content: '';
    background-image: radial-gradient(transparent, transparent, transparent, $c-cod-gray 90%, $c-cod-gray 100%);
  }
}

.referenceLine {
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background: $c-salmon;
  transform: translateX(-50%);
  opacity: 0.4;
}

.note {
  font-size: $s-xxxl;
}

.detuneArea {
  position: absolute;
  bottom: $s-l;
  left: 0;
  width: 100%;
}
</style>
