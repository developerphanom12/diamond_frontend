 
// Action Types
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";
export const SET_PRODUCT_IDS = "SET_PRODUCT_IDS";

// Action Creators
export const setProductIds = (productIds) => ({
  type: SET_PRODUCT_IDS,
  payload: productIds,
});
export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const UserDetails = (data) => {
    return {
      type: "USER_DETAILS",
      payload: data,
    };
  };
  export const userDataAction = (data) => {
    return {
      type: "USER_DATA",
      payload: data,
    };
  };
  export const loaderAction = (data) => {
    return {
      type: "LOADING_DATA",
      payload: data,
    };
  };
  export const userCheckAction = (data) => {
    return {
      type: "USER_CHECK",
      payload: data,
    };
  };

  export const appDetailsAction = (data) => {
    return {
      type: "APP_DETAILS",
      payload: data,
    };
  };


  