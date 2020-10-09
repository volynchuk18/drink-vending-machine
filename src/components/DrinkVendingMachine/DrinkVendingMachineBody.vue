<template>
  <div class="drink-vending-machine-body">
    <DrinkVendingMachineBodyCupFilling/>
    <DrinkVendingMachineBodyControl/>
  </div>
</template>

<script>
  import DrinkVendingMachineBodyCupFilling from "./DrinkVendingMachineBodyCupFilling";
  import DrinkVendingMachineBodyControl from "./DrinkVendingMachineBodyControl";

  export default {
    name: "DrinkVendingMachineBody",
    components: {DrinkVendingMachineBodyControl, DrinkVendingMachineBodyCupFilling},
  }
</script>

<style scoped lang="scss">
  .drink-vending-machine-body {
    flex: 1;
    display: flex;

    & > :nth-child(1) {
      border-right: 2px solid red;
    }
  }
</style>
