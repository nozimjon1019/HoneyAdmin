export const reSearch = (state = false, action) => {
  switch (action.type) {
    case "TEST_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

export const acSearch = (search) => {
  return {
    type: "TEST_SEARCH",
    payload: search,
  };
};
