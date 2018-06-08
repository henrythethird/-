<template>
    <section>
        <Post :title="title" />
    </section>
</template>
<script>
import Post from '@/components/Post'

export default {
  props: ['title'],
  name: 'Detail',
  components: { Post }
}
</script>
<style scoped lang="scss">

</style>
