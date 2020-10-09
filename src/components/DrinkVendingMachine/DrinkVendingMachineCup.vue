<template>
  <div @click="cupClickHandler" class="drink-vending-machine-cup">
    <div class="cup">
      <div
        ref="cup-fill"
        class="cup-fill"
      >
      </div>
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
    width: 150px;
    height: 150px;
    transition: 0.5s;
    right: 0;

    .cup {
      position: relative;
      width: 100%;
      height: 100%;
      background: rgba(176, 176, 176, 0.3);
      clip-path: polygon(10% 0%, 90% 0, 75% 100%, 25% 100%);

      &-fill {
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
      }
    }
  }
</style>
