<script>
import soundServiceCreator from '@/services/sound.service'
import Nav from './components/Nav'
import Tuner from './components/Tuner'
import Footer from './components/Footer'
import '@rocktimsaikia/github-card'

const soundService = soundServiceCreator()

export default {
  name: 'App',
  components: {
    Nav,
    Tuner,
    Footer,
  },
  data () {
    return {
      soundService,
      pitch: null,
      note: null,
      detune: null,
      isTunerActive: false
    }
  },
  mounted () {
    soundService.on('acUpdate', val => {
      this.setResults(val)
    })
    soundService.on('statusUpdate', val => {
      this.isTunerActive = val
    })
  },
  methods: {
    toggleInputHandler () {
      if (this.isTunerActive) {
        this.soundService.stop()
      } else {
        this.soundService.start()
      }
    },
    setResults (ac) {
      if (ac === -1) {
        this.pitch = null
        this.note = null
        this.detune = null
      } else {
        this.pitch = Math.round(ac)
        this.note = soundService.noteFromPitch(this.pitch)
        this.detune = soundService.centsOffFromPitch(this.pitch, this.note)
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <header>
      <Nav
        @toggle-input="toggleInputHandler"
        :isTunerActive="isTunerActive"
      />
    </header>
    <main>
      <h1 class="title">ONLINE GUITAR TUNER</h1>
      <Tuner
        :pitch="pitch"
        :note="note"
        :detune="detune"
        :isTunerActive="isTunerActive"
      />
      <div class="githubCard">
        <github-card data-user="pmanikas" data-theme="dark"></github-card>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import './styles/design';

.container {
  position: relative;
}

.title {
  text-align: center;
  color: $c-silver;
  margin-top: $s-xl;
}

.githubCard {
  width: 380px;
  margin: $s-xxxl auto 0;
  text-align: center;
  opacity: 0.7;
}

@include desktop {
  .githubCard {
    transition: opacity .3s ease-out;
    opacity: 0.3;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
