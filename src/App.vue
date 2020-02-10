<template>
  <div id="app">
    <p>random user api Loaded: {{userLoaded}}</p>
    <button @click="Reload">Reload</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("GetUser");
  },
  computed: {
    userLoaded() {
      return this.$store.state.Loaded;
    }
  },
  methods: {
    Reload() {
      this.$store.commit("SetFalse");
      this.$store.dispatch("GetUser");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
