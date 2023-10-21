<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="showModal">
      <ModalTest theme="sale" @close="toggleModal">
        <h1>Ninja Giveway!</h1>
        <p>Grab your ninja swag for half price!</p>
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
      </ModalTest>
    </div>
    <button @click.right="toggleModal">Open Modal (right)</button>
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
