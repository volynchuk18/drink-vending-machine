<template>
  <div class="drink-vending-machine-drink-select">
    <span>
      {{ drink.name }} - {{ drink.price }} монет
    </span>
    <button
      ref="button"
      @click="drinkSelectHandler(drink)"
      class="button"
      :disabled="machineIsBusy || cupFilled || coins < drink.price"
      :class="{'blink': activeDrink.id === drink.id && preparingPourDrink}"
    >
    </button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "DrinkVendingMachineDrinkSelect",
    props: {
      drink: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions(['drinkSelect']),
      drinkSelectHandler(drink) {
        if (this.machineIsBusy || this.cupFilled) {
          return
        }
        this.drinkSelect(drink)
      },
    },
    computed: {
      ...mapGetters(['machineIsBusy', 'cupFilled', 'preparingPourDrink', 'activeDrink', 'coins'])
    }
  }
</script>

<style scoped lang="scss">
  .drink-vending-machine-drink-select {
    display: flex;
    align-items: center;
    margin-left: 20px;

    .button {
      width: 30px;
      height: 30px;
      margin: 10px 100px 10px auto;
      border: 3px solid red;
      border-radius: 50%;
      box-shadow: 0 3px #999;

      &:enabled {
        cursor: pointer;
      }
    }

    .button:hover:enabled {
      background-color: #b40000;
      border: 3px solid #b40000;
    }

    .button:active {
      background-color: #f40000;
      box-shadow: 0 2px #666;
      transform: translateY(1px);
    }
  }

  .blink {
    -webkit-animation: blink 1s linear infinite;
    animation: blink 1s linear infinite;
  }

  @-webkit-keyframes blink {
    0% {
      background: rgba(34, 34, 34, 1);
    }
    50% {
      background: rgba(34, 34, 34, 0);
    }
    100% {
      background: rgba(34, 34, 34, 1);
    }
  }

  @keyframes blink {
    0% {
      background: rgba(34, 34, 34, 1);
    }
    50% {
      background: rgba(34, 34, 34, 0);
    }
    100% {
      background: rgba(34, 34, 34, 1);
    }
  }
</style>
