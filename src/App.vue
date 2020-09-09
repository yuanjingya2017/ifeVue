<template>
  <div id="app">
    <a @click="jumpTo">点击跳转</a>
    <router-view />
  </div>
</template>

<script>
// import indexPage from './pages/index'

export default {
  name: 'App',
  components: {
    // indexPage
  },
  methods: {
    jumpTo () {
      console.log(this)
      this.$router.push({
        path: '/test'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
