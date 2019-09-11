export const buyingPower = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE_BUYS":
      return state + action.increase;
    case "USE_BUY":
      return state - 1;
    default:
      return state;
  }
};
