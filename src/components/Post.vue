<template>
    <main>
        <article class="post" ref="post" v-html="articleLookup(title).content"></article>
        <p v-if="error">Couldn't find the article :-(</p>
    </main>
</template>
<script>
import highlight from 'highlight.js'
import { mapGetters } from 'vuex'
// eslint-disable-next-line
import _ from 'highlight.js/styles/default.css'
// eslint-disable-next-line
import ___ from 'highlight.js/styles/tomorrow-night-blue.css'

export default {
  name: 'Post',
  props: ['title'],
  data () {
      return {
          article: '',
          error: false
      }
  },
  mounted () {
    this.refreshSyntax()
  },
  computed: {
      ...mapGetters(['articleLookup'])
  },
  methods: {
      refreshSyntax () {
          this.$refs.post
            .querySelectorAll("pre > code")
            .forEach((el) => {
                highlight.highlightBlock(el);
            })
      }
  }
}
</script>
<style lang="scss">
    .post {
        *::selection {
            background: #008AFF;
            color: white;
        }

        pre > code, pre > code *  {
            font-family: 'Courier New', Courier, monospace;
        }

        .references * {
            font-size: 15px;
            color: gray;
        }

        date {
            font-weight: 900;
            text-transform: uppercase;
            opacity: 0.6;
            font-size: 13px;
        }
    }

    .content {
        padding-bottom: 100px;
    }

    hr {
        height: 8px;
        width: 60%;
        margin: 2em auto 2em auto;
        background-color: #f4f3f3;
        border-radius: 3px;
    }
</style>
