<script>
import Logo from './Logo'
import SliderSwitch from './SliderSwitch'

export default {
  name: 'Nav',
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
  <nav class="navContainer">
    <Logo />
    <SliderSwitch
      :is-active="isTunerActive"
      @press-button="$emit('toggleInput')"
    />
  </nav>
</template>

<style lang="scss" scoped>
@import './../styles/design';

.navContainer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $s-nav-height;
  padding: 0 $s-xl;
  &::before {
    @include fill;
    content: '';
    opacity: 0.2;
    background: $c-san-juan-blue;
  }
}

@include desktop {
  .navContainer {
    justify-content: space-around;
  }
}
</style>
