import waterSound from '@/assets/sound/water.mp3'
import machineSound from '@/assets/sound/machine.mp3'

const drinkVendingMachine = {
  state: {
    coins: 200,
    drinkPourDelay: 5000,
    drinkResidualMotion: 250,
    drinks: [
      {
        name: 'Дюшес',
        price: 5,
        color: '#66cccc',
        fillTo: 90,
        drinkPourDuration: 3000,
        id: 1
      },
      {
        name: 'Лимонад',
        price: 7,
        color: 'lime',
        fillTo: 80,
        drinkPourDuration: 2700,
        id: 2
      },
      {
        name: 'Тархун',
        price: 15,
        color: 'green',
        fillTo: 60,
        drinkPourDuration: 2400,
        id: 3
      }
    ],
    pouringDrink: false,
    preparingPourDrink: false,
    cupFilled: false,
    activeDrink: {}
  },

  actions: {
    drinkSelect: async ({state, commit}, drink) => {
      if (state.coins < drink.price) {
        return
      }
      const waterSoundAudio = new Audio(waterSound);
      const machineSoundAudio = new Audio(machineSound);

      commit('coinsReduce', drink.price);
      commit('setActiveDrink', drink);
      commit('setPreparingPourDrink', true);
      await machineSoundAudio.play();

      const startPouringDrink = () => {
        return new Promise(resolve => {
          setTimeout(async () => {
            commit('setPouringDrink', true);
            commit('setPreparingPourDrink', false);
            machineSoundAudio.pause();
            machineSoundAudio.currentTime = 0;
            await waterSoundAudio.play();
            resolve()
          }, state.drinkPourDelay);
        });
      };

      const stopPouringDrink = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            commit('setPouringDrink', false);
            commit('setCupFill', true);
            waterSoundAudio.pause();
            waterSoundAudio.currentTime = 0;
            resolve()
          }, state.activeDrink.drinkPourDuration + state.drinkResidualMotion);
        });
      };

      await startPouringDrink();
      await stopPouringDrink();
    }
  },

  mutations: {
    coinsReduce: (state, value) => {
      state.coins -= value;
    },
    setPouringDrink: (state, pouringDrink) => {
      state.pouringDrink = pouringDrink
    },
    setCupFill: (state, cupFilled) => {
      state.cupFilled = cupFilled
    },
    setPreparingPourDrink: (state, preparingPourDrink) => {
      state.preparingPourDrink = preparingPourDrink
    },
    setActiveDrink: (state, drink) => {
      state.activeDrink = drink
    }
  },

  getters: {
    coins: state => state.coins,
    drinks: state => state.drinks,
    pouringDrink: state => state.pouringDrink,
    preparingPourDrink: state => state.preparingPourDrink,
    drinkPourDelay: state => state.drinkPourDelay,
    cupFilled: state => state.cupFilled,
    machineIsBusy: state => state.pouringDrink || state.preparingPourDrink,
    activeDrink: state => state.activeDrink,
    drinkResidualMotion: state => state.drinkResidualMotion
  }
};

export default drinkVendingMachine
