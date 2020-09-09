// const tagsName = ['div', 'p']
function Vue (obj) {
    if (!obj.el) {
        console.log('请输入dom元素id')
    } else {
        // dom文本匹配 {{}}
        // 遍历元素里面的文本
        let template = document.getElementById(obj.el)
        this.getSubDom(template, obj.data)
    }
}
Vue.prototype.getSubDom = function (dom, data) {
    let keyArr = Object.keys(data)
    let reg = new RegExp(/{{.*}}/, 'g')
    if (dom.childNodes.length) {
        for (let item of dom.childNodes) {
            let val = data
            if (item.childNodes.length) {
                this.getSubDom(item, data)
            } else if (item.textContent.replace(/ /g, '').length > 1) {
                let tempText = item.textContent
                let tempStr
                keyArr.map (item => {
                    if (tempText.includes(item)) {
                        // 捕获组 捕获 {{ }}之间的数值
                        // 用.区分为数组 逐层去找属性值
                        // 然后替换为该值
                        tempStr = tempText.match(reg)[0]
                        let firstIndex = tempStr.indexOf('{{')
                        let lastIndex = tempStr.indexOf('}}')
                        let subStr = tempStr.substr(firstIndex + 2, lastIndex - 2)
                        let keysArr = subStr.split('.')
                        keysArr.map(subit => {
                            val = val[subit]
                        })
                    }
                })
                tempText = tempText.replace(tempStr, val)
                item.textContent = tempText
            }
        }
    }
}