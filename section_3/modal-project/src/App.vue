<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="showModal">
      <ModalTest :header="header" :text="text" theme="sale" @close="toggleModal"/>
    </div>
    <button @click="toggleModal">Open Modal</button>
  </div>
</template>

<script>
import ModalTest from './components/ModalTest.vue'

export default {
  name: 'App',
  components: {
    ModalTest
  },
  data() {
    return {
      title: "Hello Vue!",
      header: "Sign up for the give away!",
      text: "Grab your ninja swag for half price.",
      showModal: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
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
