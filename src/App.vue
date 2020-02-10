<template>
  <div id="app">
    <p>random user api Loaded: {{Loaded}}</p>
    <button @click="Reload">Reload</button>
    <p>Button Clicked Times: {{clickedTimes}}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    console.clear();
  },
  mounted() {
    this.GetUser();
  },
  computed: {
    ...mapState(["Loaded", "clickedTimes"])
  },
  methods: {
    Reload() {
      this.$store.commit("SetFalse");
      this.GetUser();
      this.ClickedActions({ count: 2 });
    },
    ...mapActions(["GetUser", "ClickedActions"])
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
