<template>
  <div id="app">
    <DrinkVendingMachine />
  </div>
</template>

<script>
import DrinkVendingMachine from "./components/DrinkVendingMachine/DrinkVendingMachine";
import './assets/css/main.css';

export default {
  name: 'App',
  components: {DrinkVendingMachine}
}
</script>

<style lang="scss">
  #app {
    display: flex;
    justify-content: center;
  }
</style>
