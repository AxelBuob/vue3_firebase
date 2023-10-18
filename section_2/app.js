const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {
                  title: "The Three Musketeers",
                  author: "Alexandre Dumas",
                  birthDate: "July 24, 1802",
                  deathDate: "December 5, 1870"
                },
                {
                  title: "The Count of Monte Cristo",
                  author: "Alexandre Dumas",
                  birthDate: "July 24, 1802",
                  deathDate: "December 5, 1870"
                },
                {
                  title: "Queen Margot",
                  author: "Alexandre Dumas",
                  birthDate: "July 24, 1802",
                  deathDate: "December 5, 1870"
                }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if(data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')

