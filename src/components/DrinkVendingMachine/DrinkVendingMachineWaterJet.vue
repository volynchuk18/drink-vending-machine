<template>
  <div
    ref="water-jet"
    class="drink-vending-machine-water-jet"
    :style="{background: activeDrink.color}"
  >
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "DrinkVendingMachineWaterJet",
    data() {
      return {
        waterJet: null
      }
    },
    mounted() {
      this.waterJet = this.$refs['water-jet'];
      this.waterJet.style.transition = `all ${this.drinkResidualMotion}ms linear`
    },
    watch: {
      pouringDrink(newVal) {
        if (newVal) {
          this.waterJet.style.transitionProperty = 'height';
          this.waterJet.style.height = '200px';
          this.waterJet.style.top = '37%';
        } else {
          this.waterJet.style.height = '0';
          this.waterJet.style.top = '100%';
          this.waterJet.style.transitionProperty = 'initial';
        }
      }
    },
    computed: {
      ...mapGetters([
        'pouringDrink',
        'drinkResidualMotion',
        'activeDrink'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .drink-vending-machine-water-jet {
    position: absolute;
    width: 10px;
    height: 0;
    top: 37%;
    left: 50%;
    margin-left: -3px;
  }
</style>
