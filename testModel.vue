<template>
<div class="hello">
<input type="text" v-myModel="num"> <button @click="num++">click</button> <p>{{num}}</p>
</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 0
    }
  },
  directives: {
    myModel: {
      bind: (el, obj, Vnode) => {
        el.value = obj.value
        el.addEventListener('input', function () {
          Vnode.context[obj.expression] = this.value
        })
      },
      update: (el, obj) => {
        el.value = obj.value
      }
    }
  }
}
</script>
