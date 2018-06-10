<template>
    <header class="header">
        <router-link class="title" :to="{ name: 'index' }">
            <img class="image" src="../assets/logo.svg" alt="kpat.io" />
        </router-link>
    </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped lang="scss">
    .header {
        text-align: center;
        padding-top: 50px;
    }

    .image {
        width: 360px;
    }
</style>
