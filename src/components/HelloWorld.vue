<template>
  <div class="hello">
    hello test
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      timer: 0,
      showArr2: [],
      showArr: [
        '<p>For a guide and recipes on how to configure / customize this project,<br>check out the<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.</p>',
        '<p>For a guide and recipes on how to configure / customize this project,<br>check out the<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.</p>',
        '<h3>Installed CLI Plugins</h3>',
        '<ul><li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li><li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li></ul>',
        '<h3>Essential Links</h3>',
        '<ul><li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li><li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li><li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li><li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li><li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li></ul>',
        '<h3>Essential Links</h3>',
        '<h3>Ecosystem</h3>',
        '<ul><li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li><li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li><li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li><li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li><li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li></ul>'
      ]
    }
  },
  beforeCreate () {
      console.log('this is son beforeCreated')
  },
  created () {
      console.log('this is son created')
    // this.showMessage()
  },
  beforeMount () {
    console.log('this is son beforeMount')
  },
  mounted () {
    console.log('this is son mounted')
  },
  beforeDestroy () {
      console.log('this is son beforeDestroy')
  },
  destroyed () {
      console.log('this is son destroyed')
  },
  methods: {
    showMessage () {
      for (let i = 0 ; i < this.showArr.length; i++) {
        setTimeout(() => {
          this.showArr2.push(this.showArr[this.showArr2.length])
        }, 300 * i)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
