<template>
    <div class="preview">
        <router-link :to="{ name: 'detail', params: { title } }">
            <Post :title="title" class="post" />
            <div class="after">
                <button class="button">Continue Reading</button>
            </div>
        </router-link>
        <hr>
    </div>
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
        padding: 60px 0;
        margin-bottom: 30px;

        .post {
            max-height: 600px;
            overflow-y: hidden;
        }

        hr {
            position: absolute;
            left: 0;
            right: 0;
            width: auto;
            height: 1px;
            margin: 4em 0;
        }

        &:first-child {
            padding-top: 0
        }

        &:last-child {
            padding-bottom: 0;
            
            hr {
                display: none;
            }
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
