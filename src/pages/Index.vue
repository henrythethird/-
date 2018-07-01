<template>
    <section>
        <Preview v-for="(article, idx) in articles" :title="article.name" :key="idx" />
    </section>
</template>
<script>
import Preview from '@/components/Preview'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  computed: mapGetters(['articles']),
  components: { Preview }
}
</script>
<style scoped lang="scss">

</style>
