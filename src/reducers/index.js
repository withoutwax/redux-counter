
function counter(state, action) {
  if (state === undefined) {
    return { count: 0 };
  }

  switch (action.type) {
    case "INCREMENT": {
      return Object.assign({}, { count: state.count+1 });
    }
    case "DECREMENT": {
      return Object.assign({}, { count: state.count-1 });
    }
    default: {
      return state
    }
  }
}

export default counter;
