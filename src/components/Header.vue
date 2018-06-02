<template>
    <header>
        <h1 class="title">
            <router-link class="title" :to="{ name: 'index' }">kpat.io</router-link>
        </h1>
    </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped lang="scss">
    .title {
        text-align: center;
        font-weight: 100;
    }
</style>
