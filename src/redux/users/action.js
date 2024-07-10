// Action Types
export const SET_PRODUCT_IDS = "SET_PRODUCT_IDS";
export const SET_DIAMOND_IDS = "SET_DIAMOND_IDS";
export const SET_SELECTED_VARIANT_ID = "SET_SELECTED_VARIANT_ID";
export const SET_DIAMOND_TYPE = "SET_DIAMOND_TYPE";
export const SET_SELECTED_SHAPE_IMAGE = "SET_SELECTED_SHAPE_IMAGE";
export const SET_SELECTED_RING_SVG = "SET_SELECTED_RING_SVG";
export const SET_DIAMOND_BY_ID = "SET_DIAMOND_BY_ID";
export const SET_SELECTED_SHAPE = "SET_SELECTED_SHAPE";
export const SET_UNIQUE_DATA = "SET_UNIQUE_DATA";
export const SET_UNIQUE_PRODUCT = "SET_UNIQUE_PRODUCT";
export const SET_SELECTED_MATERIAL_IMAGE = "SET_SELECTED_MATERIAL_IMAGE";
export const SET_SELECTED_RING_SHAPE = 'SET_SELECTED_RING_SHAPE';
export const SET_SELECTED_SHAPE_IMAGE_GEM = 'SET_SELECTED_SHAPE_IMAGE_GEM';
export const SET_UNIQUE_PRODUCT_GEM = 'SET_UNIQUE_PRODUCT_GEM';

// Action creator
export const fetchPredefineData = (data) => ({
  type: 'FETCH_PREDEFINE_DATA',
  payload: data,
});
export const setSelectedRingShape = (shapeTitle) => ({
  type: SET_SELECTED_RING_SHAPE,
  payload: shapeTitle,
});
export const setProductGemId = (productId) => ({
  type: 'SET_PRODUCT_GEM_ID',
  payload: productId,
});
export const setSelectedCollectionId = (id) => ({
  type: 'SET_SELECTED_COLLECTION_ID',
  payload: id,
});

export const setSelectedShapeGem = (names) => ({
  type: 'SET_SELECTED_SHAPE_GEM',
  payload: names,
});
export const setSelectedMaterialImage = (shape, imageUrl) => ({
  type: "SET_SELECTED_MATERIAL_IMAGE",
  payload: { shape, imageUrl },
});
export const setSelectedOptions = (uniqueProduct, carat, size) => ({
  type: "SET_SELECTED_OPTIONS",
  payload: { uniqueProduct, carat, size },
});
export const setUniqueProduct = (product) => ({
  type: SET_UNIQUE_PRODUCT,
  payload: product,
});
export const setUniqueProductGem = (product) => ({
  type: SET_UNIQUE_PRODUCT_GEM,
  payload: product,
});
export const setUniqueData = (data) => ({
  type: SET_UNIQUE_DATA,
  payload: data,
});
export const setSelectedShape = (shape) => ({
  type: SET_SELECTED_SHAPE,
  payload: shape,
});
export const setDiamondById = (diamondById) => ({
  type: SET_DIAMOND_BY_ID,
  payload: diamondById,
});
export const setSelectedRingSvg = (imageUrl) => ({
  type: SET_SELECTED_RING_SVG,
  payload: imageUrl,
});
export const setSelectedShapeImage = (imageUrl) => ({
  type: SET_SELECTED_SHAPE_IMAGE,
  payload: imageUrl,
});
export const setSelectedShapeImageGem = (shape) => ({
  type: SET_SELECTED_SHAPE_IMAGE_GEM,
  payload: shape,
});
export const setDiamondType = (diamondType) => ({
  type: SET_DIAMOND_TYPE,
  payload: diamondType,
});
export const setCollectionIds = (collectionIds) => ({
  type: 'SET_COLLECTION_IDS',
  payload: collectionIds,
});
export const setSelectedVariantId = (selectedVariantId) => ({
  type: SET_SELECTED_VARIANT_ID,
  payload: selectedVariantId,
});
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
