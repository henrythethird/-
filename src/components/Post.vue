<template>
    <article class="post">
        <h2 class="title">This is the title</h2>
        <section class="content">
            <p>Another point about <b>vuex/vue-router</b> are that those are not vue-cli plugins. I believe to add those after project creation you would just want to run yarn install vue-router or npm install --save vue-router. Because these libraries are so tightly coupled to Vue (and there are a couple files generated when added via the vue create CLI call) it may be nice to support adding them via the CLI as well as the standard process of using your preferred node package manager</p>
            <p>Assuming that people illl have made some changes to the initially created files, adding stuff to them later is either very complicated to get right or very likely to break your existing code because the generated code doesn't work with the changes you already made</p>
            <blockquote>Assuming that people illl have made some changes to the initially created files, adding stuff to them later is either very complicated to get right or very likely to break your existing code because the generated code doesn't work with the changes you already made</blockquote>
            <p>Another point about vuex/vue-router are that those are not vue-cli plugins. I believe to add those after project creation you would just want to run yarn install vue-router or npm install --save vue-router. Because these libraries are so tightly coupled to Vue (and there are a couple files generated when added via the vue create CLI call) it may be nice to support adding them via the CLI as well as the standard process of using your preferred node package manager</p>
            <hr />
            <p>Assuming that people illl have made some changes to the initially created files, adding stuff to them later is either very complicated to get right or very likely to break your existing code because the generated code doesn't work with the changes you already made</p>
        </section>
    </article>
</template>
<script>
export default {
  name: 'Post'
}
</script>
<style scoped lang="scss">
    .post {
        *::selection {
            background: #008AFF;
            color: white;
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
