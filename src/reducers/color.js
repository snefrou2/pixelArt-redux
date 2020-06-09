const initialState = {
  current: "white",
  available: ["blue", "green", "yellowgreen", "purple", "orange"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, current: action.newColor };
    default:
      return state;
  }
};
export default reducer;
