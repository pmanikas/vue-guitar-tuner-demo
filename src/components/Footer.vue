<script>
import Logo from './Logo'
import SliderSwitch from './SliderSwitch'
import footerBg from './../assets/images/anime-girl-with-guitar-watching-the-sunset.png';

export default {
  name: 'Footer',
  data() {
    return {
      footerBg,
    }
  },
  props: {
    isTunerActive: {
      type: Boolean,
      default: false,
    },
  },
  components: { Logo, SliderSwitch },
}
</script>

<template>
  <footer class="footerContainer">
    <img class="background" :src="footerBg" alt="anime girl with guitar watching the sunset">
    <div class="textOverlay">
        <div>Online Guitar Tuner - a Vue Demo crafted by <a href="https://pantelismanikas.eu" target="window">Pantelis Manikas</a></div>
        <a href="https://github.com/pmanikas/guitar-tuner">Github Code</a>
      </div>
  </footer>
</template>

<style lang="scss" scoped>
@import './../styles/design';

.footerContainer {
  position: relative;
  margin-top: $s-xxl;
}

.textOverlay {
  position: absolute;
  bottom: $s-s;
  width: 100%;
  text-align: center;
  color: $c-silver;
  font-size: 2rem;
  a {
    color: $c-silver;
    text-decoration: underline;
  }
}

.background {
  width: 100%;
}

@include desktop {

}
</style>
