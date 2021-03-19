<script>
import soundServiceCreator from '@/services/sound.service';
import Tuner from './components/Tuner.vue';
import SliderSwitch from './components/SliderSwitch.vue';

const soundService = soundServiceCreator();

export default {
  name: 'App',
  components: {
    SliderSwitch,
    Tuner,
  },
  data() {
    return {
      soundService,
      pitch: null,
      note: null,
      detune: null,
      isPlaying: false,
    };
  },
  mounted() {
    soundService.on('acUpdate', (val) => {
      this.setResults(val);
    });
    soundService.on('statusUpdate', (val) => {
      this.isPlaying = val;
    });
  },
  methods: {
    toggleInputHandler() {
      if (this.isPlaying) {
        this.soundService.stop();
      } else {
        this.soundService.start();
      }
    },
    setResults(ac) {
      if (ac === -1) {
        this.pitch = null;
        this.note = null;
        this.detune = null;
      } else {
        this.pitch = Math.round(ac);
        this.note = soundService.noteFromPitch(this.pitch);
        this.detune = soundService.centsOffFromPitch(this.pitch, this.note);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <header>
      <nav>LOGO</nav>
    </header>
    <main>
        <Tuner :pitch='pitch' :note='note' :detune='detune' :isPlaying='isPlaying' />
        <SliderSwitch class="switch" :isActive="isPlaying" @press-button="toggleInputHandler" />
    </main>
    <footer>FOOTER</footer>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles/design";

$tuning-area-size: 400px;

.container {
  position: relative;
  width: $tuning-area-size;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.switch {
  position: absolute;
  top: $s-xl;
  right: $s-xl;
  opacity: 0.5;
}

</style>
