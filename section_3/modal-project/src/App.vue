<template>
  <div>
    <h1>{{ title }}</h1>
    <teleport to="#modals" v-if="showModal">
      <ModalTest theme="sale" @close="toggleModal">
        <h1>Ninja Giveway!</h1>
        <p>Grab your ninja swag for half price!</p>
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
      </ModalTest>
    </teleport>
    <teleport to="#modals" v-if="showModalForm">
      <ModalTest @close="toggleModalForm">
        <h1>Modal Form</h1>
      </ModalTest>
    </teleport>
    <button @click.right="toggleModal">Open Modal (right)</button>
    <button @click="toggleModalForm">Open Modal Form</button>
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
      showModal: false,
      showModalForm: false
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
    },
    toggleModalForm() {
      this.showModalForm = !this.showModalForm
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
