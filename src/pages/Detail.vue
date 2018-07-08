<template>
    <section>
        <Post :title="title" :key="title" />
        <hr class="all">
        <Preview :title="next" small="true" :key="next" />
    </section>
</template>
<script>
import Post from '@/components/Post'
import Preview from '@/components/Preview'
import { mapGetters } from 'vuex'

export default {
  props: ['title'],
  name: 'Detail',
  components: { Post, Preview },
  computed: {
      ...mapGetters(['nextArticle']),
      next() {
          return this.nextArticle(this.title).name
      }
  }
}
</script>
<style scoped lang="scss">

</style>
