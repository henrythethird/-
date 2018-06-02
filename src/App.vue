<template>
    <div id="app">
        <Header />
        <section class="page">
            <router-view />
        </section>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: 'app',
    components: { Header }
}
</script>

<style lang="scss">
    .page {
        max-width: 600px;
        margin: auto;
    }

    * {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: inherit;
        border: none;
        background: transparent;
        text-align: left;
        outline: none;
        text-decoration: none;
        font-size: inherit;
    }

    a {
        transition: color 100ms ease-in-out;
        cursor: pointer;

        &:hover {
            color: #008AFF;
        }
    }

    p, blockquote {
        line-height: 1.7;
        font-size: 18px;
        color: #4D4D4D;
    }

    blockquote {
        position: relative;
        font-style: italic;
        padding: 0 25px;

        &::before {
            content: "";
            position: absolute;
            left: -8px;
            width: 8px;
            top: 0;
            bottom: 0;
            background-color: #008AFF;
        }
    }

    h1, h2, h3, h4, h5, h6, p, blockquote, hr {
        margin-bottom: 1em;
    }

    h1 {
        font-size: 60px;
    }

    h2 {
        font-size: 48px;
    }

    h3 {
        font-size: 30px;
    }
</style>
