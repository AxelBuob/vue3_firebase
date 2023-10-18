const app = Vue.createApp({
    data() {
        return {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 57
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount('#app')

