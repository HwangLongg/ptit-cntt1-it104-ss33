const initialState = "";

export const notificationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return action.payload;
    case "HIDE_NOTIFICATION":
      return "";
    default:
      return state;
  }
};
