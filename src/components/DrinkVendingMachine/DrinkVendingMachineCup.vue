<template>
  <div @click="cupClickHandler" class="drink-vending-machine-cup">
    <div class="cup">
    </div>
    <div
      ref="cup-fill"
      class="cup-fill"
    >
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    name: "DrinkVendingMachineCup",
    watch: {
      activeDrink: {
        deep: true,
        handler(newVal) {
          const cupFill = this.$refs['cup-fill'];
          if (!Object.keys(newVal).length) {
            cupFill.style = null;
            return
          }
          cupFill.style.transition = `height ${newVal.drinkPourDuration}ms linear ${this.drinkPourDelay + this.drinkResidualMotion}ms`;
          cupFill.style.height = `${newVal.fillTo}%`;
          cupFill.style.background = newVal.color;
        }
      }
    },
    computed: {
      ...mapGetters([
        'cupFilled',
        'machineIsBusy',
        'pouringDrink',
        'activeDrink',
        'drinkResidualMotion',
        'drinkPourDelay'
      ]),
      canInteract() {
        return !this.machineIsBusy && this.cupFilled
      }
    },
    methods: {
      ...mapMutations(['setCupFill', 'setActiveDrink']),
      cupClickHandler() {
        if (this.canInteract) {
          this.setCupFill(false);
          this.setActiveDrink({})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .drink-vending-machine-cup {
    position: relative;
    width: 150px;
    height: 150px;
    transition: 0.5s;

    .cup {
      width: 100%;
      height: 100%;
      background: rgba(208, 208, 208, 0.8);
      clip-path: polygon(10% 0%, 90% 0, 75% 100%, 25% 100%);

      &-fill {
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
        z-index: -1;
      }
    }
  }
</style>
