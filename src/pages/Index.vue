<template>
    <section>
        <Preview v-for="(article, idx) in articles" :title="article.title" :key="idx" />
    </section>
</template>
<script>
import Preview from '@/components/Preview'

export default {
  name: 'Index',
  data () {
    return {
        articles: [
            { title: 'error_propagation' },
            { title: 'gin_testing' },
            { title: 'go_testing' }
        ]
    }  
  },
  components: { Preview }
}
</script>
<style scoped lang="scss">

</style>
