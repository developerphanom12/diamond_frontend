 
// Action Types
export const SET_PRODUCT_IDS = "SET_PRODUCT_IDS";
export const SET_DIAMOND_IDS = "SET_DIAMOND_IDS";


// Action Creators

export const setDiamondIds = (diamondIds) => ({
  type: SET_DIAMOND_IDS,
  payload: diamondIds,
});
export const setProductIds = (productIds) => ({
  type: SET_PRODUCT_IDS,
  payload: productIds,
});

 

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
 
  export const userCheckAction = (data) => {
    return {
      type: "USER_CHECK",
      payload: data,
    };
  };



  