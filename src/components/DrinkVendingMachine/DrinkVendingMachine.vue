<template>
  <div class="drink-vending-machine-container">
    <DrinkVendingMachineHeader/>
    <DrinkVendingMachineBody/>
  </div>
</template>

<script>
  import DrinkVendingMachineHeader from "./DrinkVendingMachineHeader";
  import DrinkVendingMachineBody from "./DrinkVendingMachineBody";

  export default {
    name: "DrinkVendingMachine",
    components: {DrinkVendingMachineBody, DrinkVendingMachineHeader}
  }
</script>

<style scoped lang="scss">
  .drink-vending-machine-container {
    display: flex;
    flex-direction: column;
    width: 600px;
    min-width: 600px;
    height: 400px;
    min-height: 400px;
    border: 2px solid red;

    & > :nth-child(1) {
      border-bottom: 2px solid red;
    }
  }
</style>
