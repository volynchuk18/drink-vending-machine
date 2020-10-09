<template>
  <div class="drink-vending-machine-body-cup-filling">
    <span v-if="cupFilled" class="take-drink-label">Возьмите напиток</span>
    <DrinkVendingMachineCup class="drink-vending-machine-cup-wrap"/>
    <DrinkVendingMachineWaterJet/>
  </div>
</template>

<script>
  import DrinkVendingMachineCup from "./DrinkVendingMachineCup";
  import DrinkVendingMachineWaterJet from "./DrinkVendingMachineWaterJet";
  import {mapGetters} from 'vuex';

  export default {
    name: "DrinkVendingMachineBodyCupFilling",
    components: {DrinkVendingMachineWaterJet, DrinkVendingMachineCup},
    computed: {
      ...mapGetters(['cupFilled'])
    }
  }
</script>

<style scoped lang="scss">
  .drink-vending-machine-body-cup-filling {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: #ff7068;
    overflow: hidden;

    .take-drink-label {
      position: absolute;
      top: 10px;
    }

    &::before {
      content: "";
      position: absolute;
      box-sizing: border-box;
      border-bottom: 250px solid white;
      border-left: 75px solid transparent;
      border-right: 75px solid transparent;
      width: 100%;
      bottom: 0;
    }

    &::after {
      content: "";
      position: absolute;
      box-sizing: border-box;
      border-top: 50px solid red;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      width: 25%;
      top: 70px;
      left: 50%;
      transform: translateX(-50%);
    }

    .drink-vending-machine-cup-wrap {
      z-index: 1;
      clip-path: polygon(0% -100%, 95% -50%, 75% 100%, 25% 100%);
    }
  }
</style>
