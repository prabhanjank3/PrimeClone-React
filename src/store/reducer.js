const initialStore = {
  isLoggedIn: false,
  userID: "",
  firstName: "",
  home_display_data_loaded: false,
  home_display: {}
};
const reducer = (state = initialStore, action) => {
  console.log(action);
  if (action.type === "DATA_LOAD_UPDATE_STATE") {
    state = {
      ...state,
      home_display: action.home_display,
      home_display_data_loaded: true
    };
  }
  if (action.type === "AUTH_SUCCESS") {
    state = {
      ...state,
      isLoggedIn: true,
      userID: action.payLoad.userID,
      firstName: action.payLoad.firstName
    };
    console.log("Changed auth state");
  }

  return state;
};
export default reducer;
