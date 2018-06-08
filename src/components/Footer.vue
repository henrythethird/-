<template>
    <footer class="footer">
        <router-link :to="{ name: 'index' }">kpat.io</router-link>
    </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped lang="scss">
    .footer {
        border-top: 1px solid #f0f0f0;
        min-height: 75px;

        display: flex;
        align-items: center;
        justify-content: center;
        color: gray;
    }
</style>
