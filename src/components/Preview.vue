<template>
    <router-link class="preview" :to="{ name: 'detail', params: { title } }">
        <Post :title="title" class="post" />
        <div class="after">
            <button class="button">Continue Reading</button>
        </div>
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
        display: block;
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 30px;
        margin-bottom: 30px;

        &:last-child {
            border: 0;
        }

        .post {
            max-height: 600px;
            overflow: hidden;
        }
    }

    .after {
        padding: 20px;
        text-align: center;
    }

    .button {
        border: 2px solid #f0f0f0;
        border-radius: 18px;
        padding: 5px 10px;
        cursor: pointer;
        transition: color 100ms ease-in-out,
                    background-color 100ms ease-in-out,
                    border-color 100ms ease-in-out;

        &:hover {
            background-color: #008AFF;
            color: white;
            border-color: transparent;
        }
    }

</style>
