<template>
  <div class="flex flex-col items-center bg-primary w-screen h-screen py-12">
    <div class="flex flex-col items-center w-8/12 h-full">
      <NavBar />
      <div class="border-2 border-slate-300 overflow-scroll h-full w-10/12 p-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
