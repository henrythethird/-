<template>
    <header class="header" :class="{ 'hidden': isHidden }">
        <router-link class="title" :to="{ name: 'index' }">kpat.io</router-link>
    </header>
</template>
<script>
export default {
  name: 'Header',
  computed: {
      isHidden () {
          return this.$route.name !== 'index'
      }
  }
}
</script>
<style scoped lang="scss">
    .header {
        border-bottom: 1px solid transparent;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 60px 0;
        font-size: 60px;
        font-weight: 100;
        overflow-y: hidden;

        box-shadow: 0 0 0 #000;
        transform: translate3d(0,0,0);

        transition: padding 150ms ease-in-out,
                    border-color 150ms ease-in-out;
        will-change: padding, border-color;

        &.hidden {
            border-color: #f0f0f0;
            padding: 10px 0;
        }
    }
</style>
