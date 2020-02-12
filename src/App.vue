<template>
  <div id="app">
    <p>random user api Loaded: {{Loaded}}</p>
    <button @click="Reload">Reload</button>
    <p>Button Clicked Times: {{clickedTimes}}</p>
    <p>Female number: {{FemaleNum}}</p>
    <p>Male numner: {{MaleNum}}</p>
    <ul>
      <li :key="idx" v-for="(el,idx) in users">
        <p>Name: {{el.name.title}}. {{el.name.first}}</p>
        <p>Gender: {{el.gender}}</p>
        <p>Email: {{el.email}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
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
    ...mapState(["Loaded", "clickedTimes", "users"]),
    ...mapGetters(["FemaleNum", "MaleNum"])
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
