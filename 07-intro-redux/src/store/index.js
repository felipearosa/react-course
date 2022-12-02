const redux = require('redux');

const counterRedux = (state, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }

  return state;
};

const store = redux.configureStore(counterRedux);

export default store;
