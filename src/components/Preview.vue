<template>
    <div class="preview" :class="{ small }">
        <router-link :to="{ name: 'detail', params: { title } }">
            <span class="next">suggestion</span>
            <Post :title="title" class="post" />
            <div class="after">
                <button class="button">Continue Reading</button>
            </div>
        </router-link>
        <hr class="all">
    </div>
</template>
<script>
import Post from '@/components/Post'

export default {
  name: 'Preview',
  props: ['title', 'small'],
  components: { Post }
}
</script>
<style scoped lang="scss">
    .preview {
        display: block;

        .post {
            max-height: 600px;
            overflow-y: hidden;
        }

        .next {
            display: none;
        }

        &.small {
            .next {
                display: block;
                text-transform: uppercase;
                font-weight: 800;
                opacity: 0.8;
            }

            .post {
                max-height: 300px;

                /deep/ date {
                    display: none;
                }
            }
        }

        &:first-child {
            padding-top: 0
        }

        &:last-child {
            padding-bottom: 0;
            
            hr.all {
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
