<script>
import Logo from './Logo'
import NavButton from './NavButton'

export default {
    name: 'Nav',
    props: {
        isTunerActive: {
            type: Boolean,
            default: false,
        },
    },
    components: { Logo, NavButton },
}
</script>

<template>
    <nav class="navContainer">
        <Logo />
        <NavButton :is-active="isTunerActive" @press-button="$emit('toggleInput')" />
    </nav>
</template>

<style lang="scss" scoped>
@import './../styles/design';

.navContainer {
    position: absolute;
    top: 0;
    left: 0;
    z-index: $z-highlight;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: $s-l $s-xxl;
}

@include desktop {
    .navContainer {
        justify-content: space-around;
    }
}
</style>
