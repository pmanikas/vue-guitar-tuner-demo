<script>
import Nav from './components/Nav'
import GuitarTuner from "vue-guitar-tuner";
import GithubCard from "./components/GithubCard";
import Footer from './components/Footer'
import("vue-guitar-tuner/dist/vue-guitar-tuner.css");

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    GithubCard,
    GuitarTuner,
  },
  data () {
    return {
      isTunerActive: false
    }
  },
  methods: {
    statusUpdate(status) {
      this.isTunerActive = status
    }
  }
}
</script>

<template>
  <div class="container">
    <header>
      <Nav
        @toggleInput="$root.$toggleGuitarTuner()"
        :isTunerActive="isTunerActive"
      />
    </header>
    <main>
      <h1 class="title">GUITAR TUNER</h1>
      <GuitarTuner class="tuner" @statusUpdate="statusUpdate" />
      <h2 class="developerTitle">About Developer</h2>
      <GithubCard username="pmanikas" />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import './styles/design';

.container {
  position: relative;
}

.tuner {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.title {
  position: absolute;
  top: 25vh;
  left: 50%;
  z-index: $z-minus;
  transform: translate(-50%);
  text-align: center;
  font-size: 7rem;
  opacity: 0.1;
  text-shadow: 1px 1px $c-silver, -1px -1px $c-cod-gray;
}

.developerTitle {
  margin: $s-xxxl auto $s-xl;
  text-align: center;
}

.githubCard {
  margin: 0 auto $s-xxxl;
}
</style>
