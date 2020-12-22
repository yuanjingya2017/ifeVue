<template>
  <div>
    test
  </div>
</template>

<script>
import { getOnlyCompany } from '@api/user'
export default {
  data () {
    return {
      res: null,
      paramsList: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 }
      ]
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      // const tempLength = paramsList.length / num
      this.test(this.paramsList, this.callback)
      // spawn
    },
    spawn (genF) {
      return new Promise(function (resolve, reject) {
        const gen = genF()
        function step (nextF) {
          let next
          try {
            next = nextF()
          } catch (e) {
            return reject(e)
          }
          if (next.done) {
            return resolve(next.value)
          }
          Promise.resolve(next.value).then(function (v) {
            step(function () { return gen.next(v) })
          }, function (e) {
            step(function () { return gen.throw(e) })
          })
        }
        step(function () { return gen.next(undefined) })
      })
    },
    callback (res, callback) {
      if (!res.done) {
        this.test(this.paramsList, callback)
      }
    },
    test (paramsList, callback) {
      setTimeout(() => {
        const num = 3
        const res = this.deals(this.paramsList.splice(0, num), 3)
        console.log(res, '===this.res')
        callback(res.next(), this.callback)
      }, 1000)
    },
    deals: function *(params, num) {
      // yield
      // reduce
      // 函数柯里化 高阶函数
      if (!params.length) return false
      yield this.getUrl2(params)
    },
    async dealUrls (params, num) {
      const res = []
      const tempLength = params.length / num
      for (let i = 0; i < tempLength; i++) {
        const temp = params.splice(0, 3)
        const res1 = await this.getUrl(temp)
        console.log(res1, 'res1')
        res.push(...res1)
      }
      return res
    },
    getUrl2: function (temp) {
      return new Promise((resolve, reject) => {
        Promise.all(temp.map(item => getOnlyCompany(item.id)))
          .then(res => {
            console.log(res, '===getUrl2')
            if (res) {
              resolve(res)
            }
          })
      })
    },
    getUrl (temp) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          Promise.all(temp.map(item => getOnlyCompany(item.id)))
            .then(res => {
              console.log(res, '===res')
              if (res) {
                resolve(res)
              }
            })
        }, 1000)
      })
    }
  }
}
</script>

<style lang="less">
</style>
