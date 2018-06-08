<template>
    <router-link class="preview" :to="{ name: 'detail', params: { title } }">
        <Post :title="title" />
    </router-link>
</template>
<script>
import Post from '@/components/Post'

export default {
  name: 'Preview',
  props: ['title'],
  components: { Post }
}
</script>
<style scoped lang="scss">
    .preview {
        position: relative;
        display: block;
        max-height: 400px;
        overflow: hidden;
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 30px;
        margin-bottom: 30px;

        &::after {
            content: '...';
            text-align: center;
            font-size: 20px;
            position: absolute;
            bottom: 0;
            height: 60px;
            left: 0;
            right: 0;
            background-color: white;
        }

        &:last-child {
            border: 0;
        }
    }
</style>
