import {
  SET_DIAMOND_BY_ID,
  SET_DIAMOND_IDS,
  SET_DIAMOND_TYPE,
  SET_PRODUCT_IDS,
  SET_SELECTED_RING_SVG,
  SET_SELECTED_SHAPE,
  SET_SELECTED_SHAPE_IMAGE,
  SET_SELECTED_VARIANT_ID,
  SET_UNIQUE_DATA,
  SET_UNIQUE_PRODUCT,
  SET_SELECTED_MATERIAL_IMAGE,
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
  selectedRingSvg: null,
  diamondById: null,
  selectedShape: "null",
  uniqueData: [],
  uniqueProduct: null,
  selectedOptions: {
    uniqueProduct: null,
    carat: null,
    size: null,
  },
  collectionIds: null,
  selectedMaterialImage: {
    shape: null,
    imageUrl: null,
  },
  selectedCollectionId: "",
  selectedShapeNames: null,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_COLLECTION_ID":
      return {
        ...state,
        selectedCollectionId: action.payload,
      };
    case "SET_SELECTED_SHAPE_NAMES":
      return {
        ...state,
        selectedShapeNames: action.payload,
      };
    case SET_SELECTED_MATERIAL_IMAGE:
      return {
        ...state,
        selectedMaterialImage: {
          shape: action.payload.shape,
          imageUrl: action.payload.imageUrl,
        },
      };
    case "SET_SELECTED_OPTIONS":
      return {
        ...state,
        selectedOptions: {
          uniqueProduct: action.payload.uniqueProduct,
          carat: action.payload.carat,
          size: action.payload.size,
        },
      };
    case SET_UNIQUE_PRODUCT:
      return {
        ...state,
        uniqueProduct: action.payload,
      };
    case "SET_COLLECTION_IDS":
      return {
        ...state,
        collectionIds: action.payload,
      };
    case SET_UNIQUE_DATA:
      return {
        ...state,
        uniqueData: action.payload,
      };
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
