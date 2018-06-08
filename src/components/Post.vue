<template>
    <article class="post" ref="post" v-html="article"></article>
</template>
<script>
import axios from 'axios'
import highlight from 'highlight.js'
import _ from 'highlight.js/styles/default.css'
import ___ from 'highlight.js/styles/tomorrow-night-blue.css'

export default {
  name: 'Post',
  props: ['title'],
  data () {
      return {
          article: ''
      }
  },
  mounted () {
      axios.get('/blog/' + this.title + '.html')
        .then(({data}) => {
            this.article = data
            
            setTimeout(this.refreshSyntax, 50)
        })
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
