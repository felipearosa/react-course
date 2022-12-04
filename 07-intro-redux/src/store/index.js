const redux = require('redux');

const initialState = {
  counter: 0,
  showCount: true
}

const counterRedux = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCount: state.showCount
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCount: state.showCount
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCount: state.showCount
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCount: !state.showCount
    }
  }

  return state;
};

const store = redux.createStore(counterRedux);

export default store;
