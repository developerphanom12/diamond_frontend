import {
  SET_DIAMOND_BY_ID,
  SET_DIAMOND_IDS,
  SET_DIAMOND_TYPE,
  SET_PRODUCT_IDS,
  SET_SELECTED_RING_SVG,
  SET_SELECTED_SHAPE,
  SET_SELECTED_SHAPE_IMAGE,
  SET_SELECTED_VARIANT_ID,
} from "./action";

const initialState = {
  user: {},
  userCheck: false,
  role: "",
  appDetails: {},
  isLoading: false,
  productIds: [],
  diamondIds: [],
  selectedVariantId: [],
  diamondType: "",
  selectedShapeImage: null,
  selectedRingSvg:null,
  diamondById: null,
  selectedShape: 'null',
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SHAPE:
      return {
        ...state,
        selectedShape: action.payload,
      };
    case SET_DIAMOND_BY_ID:
      return {
        ...state,
        diamondById: action.payload,
      };
    case SET_SELECTED_RING_SVG:
      return {
        ...state,
        selectedRingSvg: action.payload,
      };
    case SET_SELECTED_SHAPE_IMAGE:
      return {
        ...state,
        selectedShapeImage: action.payload,
      };
    case SET_DIAMOND_TYPE:
      return {
        ...state,
        diamondType: action.payload,
      };
    case SET_SELECTED_VARIANT_ID:
      return {
        ...state,
        selectedVariantId: action.payload,
      };
    case SET_DIAMOND_IDS:
      return {
        ...state,
        diamondIds: action.payload,
      };
    case SET_PRODUCT_IDS:
      return {
        ...state,
        productIds: action.payload,
      };

    case "USER_DATA":
      return {
        ...state,
        user: action.payload,
      };
    case "LOADING_DATA":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "USER_CHECK":
      return {
        ...state,
        userCheck: action.payload,
      };
    case "APP_DETAILS":
      return {
        ...state,
        appDetails: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
