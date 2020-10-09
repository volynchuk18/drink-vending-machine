<template>
  <div class="drink-vending-machine-body-control">
    <DrinkVendingMachineDrinkSelect
      v-for="drink in drinks"
      :key="drink.id"
      :drink="drink"
    />
    <div class="wallet">
      Монет на балансе {{ coins }}
    </div>
  </div>
</template>

<script>
  import DrinkVendingMachineDrinkSelect from "./DrinkVendingMachineDrinkSelect";
  import {mapGetters} from 'vuex';

  export default {
    name: "DrinkVendingMachineBodyControl",
    components: {DrinkVendingMachineDrinkSelect},
    computed: {
      ...mapGetters(['coins', 'drinks'])
    }
  }
</script>

<style scoped lang="scss">
  .drink-vending-machine-body-control {
    flex: 1;
    display: flex;
    flex-direction: column;

    .wallet {
      margin: auto 10px 10px auto;
    }
  }
</style>
