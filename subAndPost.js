class ObserverClass {
    constructor (options) {
        this.$options = options
 
        // 数据响应化
        this.$data = options.data
        this.walk(this.$data)
        new Watcher()
        this.$data.test
        new Watcher()
        this.$data.foo.bar
    }
    walk (obj) {
        let keys = Object.keys(obj);

        for (let i = 0; i < keys.length; i++) {
            this.setPrototype(obj, keys[i], obj[keys[i]])
        }
    }
    setPrototype (obj, key, val) {
        console.log('set defineProperty')
        let dep = new Dep()
        for (let item in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, item)) {
                Object.defineProperty(obj, key, {
                    enumerable: true,
                    configurable: true,
                    get() {
                        console.log('get', key)
                        dep.sub(Dep.target, key)
                        // debugger
                        console.log(Dep.target, '=dep.sub')
                        return val
                    },
                    set(nv) {
                        console.log('set', nv)
                        val = nv
                        dep.notify(key)
                    }
                })
            }
        }
    }
}

class Watcher {
    constructor () {
        // debugger
        console.log(this, '=watcher')
        Dep.target = this
    }
    update() {
        // debugger
        console.log('update views');
    }
}

class Dep {
    // static target = Watcher
    constructor() {
        this.queue = []
    }
    notify (val) {
        // debugger
        console.log(this.queue, '=watcher')
        this.queue[val] && this.queue[val].map(item => item.update())
    }
    sub (target, val) {
        // debugger
        console.log(target, val, '=sub')
        if (this.queue[val]) {
            this.queue[val].push(target)
        } else {
            this.queue[val] = [target]
        }
    }
}