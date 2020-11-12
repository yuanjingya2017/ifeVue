// https://juejin.im/post/6844903667791855623#comment
function myPromise (executor) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.onResolved = [];
    self.onRejected = [];
    function resolve (value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'fulfilled';
            self.onResolved.forEach(fn => fn());
        }
    }
    function reject (reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
            self.onRejected.forEach(fn => fn());
        }
    }
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
myPromise.prototype.then = function (onfulfilled, onrejected) {
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : val => val;
    onrejected = typeof onrejected === 'function' ? onrejected : err => {
        throw err;
    }
    let self = this;
    let promise2;
    promise2 = new myPromise((resolve, reject) => {
        if (self.status === 'fulfilled') {
            setTimeout(() => {
                try {
                    let x = onfulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0);
        }
        if (self.status === 'reject') {
            alert('reject')
            setTimeout(() => {
                try {
                    let x = onrejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0);
        }
        if (self.status === 'pending') {
            alert('pending')
            self.onResolved.push(function () {
                setTimeout(() => {
                    try {
                        let x = onfulfilled(self.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            });
            self.onRejected.push(function () {
                setTimeout(() => {
                    try {
                        let x = onrejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            })
        }
    })
}

function resolvePromise (promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用'))
    }
    if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then
            let called = true
            if (typeof then === 'function') {
                then.call(x, (y) => {
                    if (called) return false
                    called = true
                    resolve(y)
                }, e => {
                    if (called) return false
                    called = true
                    reject(e)
                })
            }
        } catch (error) {
            reject(error)
        }
    } else {
        resolve(x)
    }
}