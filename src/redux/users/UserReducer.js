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
  SET_UNIQUE_PRODUCT_GEM,
  SET_SELECTED_MATERIAL_IMAGE,
  SET_SELECTED_RING_SHAPE,
  SET_SELECTED_SHAPE_IMAGE_GEM,
  SET_FOR_HER_HIM,
  SET_SELECTED_HIM_IMG_TITLE,
  SET_SELECTED_HER_IMG_TITLE,
  SET_HER_HIM_PRODUCT_IDS,
} from "./type";

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
  selectedShapeImageGem: null,
  selectedRingShape: null,
  selectedRingSvg: null,
  diamondById: null,
  selectedShape: "null",
  uniqueData: [],
  uniqueProduct: null,
  uniqueProductGem: null,
  productGemId: null,
  selectedOptions: {
    uniqueProduct: null,
    carat: null,
    color: null,
  },
  collectionIds: null,
  selectedMaterialImage: {
    shape: null,
    imageUrl: null,
  },
  selectedCollectionId: "",
  selectedShapeNames: null,
  predefineData: null,
  herHimProductIds: null,
  her: {
    selectedTitle: "",
    selectedImg: "",
  },
  him: {
    selectedTitle: "",
    selectedImg: "",
  },
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HER_HIM_PRODUCT_IDS:
      return {
        ...state,
        herHimProductIds: action.payload,
      };
    case SET_SELECTED_HER_IMG_TITLE:
      return {
        ...state,
        her: {
          selectedTitle: action.payload.selectedTitle,
          selectedImg: action.payload.selectedImg,
        },
      };
    case SET_SELECTED_HIM_IMG_TITLE:
      return {
        ...state,
        him: {
          selectedTitle: action.payload.selectedTitle,
          selectedImg: action.payload.selectedImg,
        },
      };
    case "FETCH_PREDEFINE_DATA":
      return {
        ...state,
        predefineData: action.payload,
      };
    case "SET_PRODUCT_GEM_ID":
      return {
        ...state,
        productGemId: action.payload,
      };
    case SET_SELECTED_RING_SHAPE: // Add this case
      return {
        ...state,
        selectedRingShape: action.payload,
      };
    case "SET_SELECTED_COLLECTION_ID":
      return {
        ...state,
        selectedCollectionId: action.payload,
      };
    case "SET_SELECTED_SHAPE_GEM":
      return {
        ...state,
        selectedShapeGem: action.payload,
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
          color: action.payload.color,
        },
      };
    case SET_UNIQUE_PRODUCT:
      return {
        ...state,
        uniqueProduct: action.payload,
      };
    case SET_UNIQUE_PRODUCT_GEM:
      return {
        ...state,
        uniqueProductGem: action.payload,
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
    case SET_SELECTED_SHAPE_IMAGE_GEM:
      return {
        ...state,
        selectedShapeImageGem: action.payload,
      };
    case SET_DIAMOND_TYPE:
      return {
        ...state,
        diamondType: action.payload,
      };
    case SET_FOR_HER_HIM:
      return {
        ...state,
        forHerHim: action.payload,
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
