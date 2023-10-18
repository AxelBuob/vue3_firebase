const app = Vue.createApp({
    data() {
        return {
            url: "https://thenetninja.co.uk",
            showBooks: true,
            books: [
                {
                  title: "The Three Musketeers",
                  author: "Alexandre Dumas",
                  birthDate: "July 24, 1802",
                  deathDate: "December 5, 1870",
                  img: "./assets/1.jpg",
                  isFav: true
                },
                {
                  title: "The Count of Monte Cristo",
                  author: "Alexandre Dumas",
                  birthDate: "July 24, 1802",
                  deathDate: "December 5, 1870",
                  img: "./assets/2.jpg",
                  isFav: false
                },
                {
                  title: "Queen Margot",
                  author: "Alexandre Dumas",
                  birthDate: "July 24, 1802",
                  deathDate: "December 5, 1870",
                  img: "./assets/3.jpg",
                  isFav: true
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
        },
        toggleFav(e, book) {
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')

