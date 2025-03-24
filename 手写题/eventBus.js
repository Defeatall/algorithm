class myEventBus {
    constructor() {
        this.events = {}
    }
    $on(eventName, cb) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(cb)
    }
    $emit(eventName, ...args) {
        this.events[eventName]?.forEach(cb => {
            cb(...args)
        })
    }
    $off(eventName, cb) {
        this.events[eventName]?.forEach((item, index) => {
            if (item == cb) {
                this.events[eventName].splice(index, 1)
            }
        })
    }
    $once(eventName, cb) {
        let _this = this
        function onceCb() {
            cb.apply(_this, [...arguments])
            _this.$off(eventName, onceCb)
        }
        this.$on(eventName, onceCb)
    }
}

const eventBus = new myEventBus()
eventBus.$once('btnClick', (num) => {
    console.log('click', num)
})
eventBus.$emit('btnClick', 10) // click 10
eventBus.$emit('btnClick', 10) // 输出空