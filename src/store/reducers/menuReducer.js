//*  Action
const SET_VALUE_A = 'Menu/SET_VALUE_A';
const SET_VALUE_B = 'Menu/SET_VALUE_B';
const SET_VALUE_C = 'Menu/SET_VALUE_C';
const SET_VALUE_R = 'Menu/SET_VALUE_R';
const SET_VALUE_O = 'Menu/SET_VALUE_O';
const SET_VALUE_G = 'Menu/SET_VALUE_G';
const SET_VALUE_G_SLOPE = 'Menu/SET_VALUE_G_SLOPE';
const SET_VALUE_A_MODEL = 'Menu/SET_VALUE_A_MODEL';
const SET_VALUE_B_MODEL = 'Menu/SET_VALUE_B_MODEL';
const SET_VALUE_C_MODEL = 'Menu/SET_VALUE_C_MODEL';
const SET_FLOOR = 'Menu/FLOOR';
const SET_UNIT = 'Menu/SET_UNIT';
const SET_ANIMATE = 'Menu/SET_ANIMATE';

//*  Initialize State
const initialState = {
  valueA: null,
  valueB: null,
  valueC: null,
  valueR: null,
  valueO: null,
  valueG: null,
  valueGSlope: null,
  valueAModel: null,
  valueBModel: null,
  valueCModel: null,
  floor: null,
  unit: 'mm',
  animate: false,
};

//*  Default Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE_A:
      return {
        ...state,
        valueA: action.payload,
      };
    case SET_VALUE_B:
      return {
        ...state,
        valueB: action.payload,
      };
    case SET_VALUE_C:
      return {
        ...state,
        valueC: action.payload,
      };
    case SET_VALUE_O:
      return {
        ...state,
        valueO: action.payload,
      };
    case SET_VALUE_R:
      return {
        ...state,
        valueR: action.payload,
      };
    case SET_VALUE_G:
      return {
        ...state,
        valueG: action.payload,
      };
    case SET_VALUE_G_SLOPE:
      return {
        ...state,
        valueGSlope: action.payload,
      };
    case SET_VALUE_A_MODEL:
      return {
        ...state,
        valueAModel: action.payload,
      };
    case SET_VALUE_B_MODEL:
      return {
        ...state,
        valueBModel: action.payload,
      };
    case SET_VALUE_C_MODEL:
      return {
        ...state,
        valueCModel: action.payload,
      };
    case SET_FLOOR:
      return {
        ...state,
        floor: action.payload,
      };
    case SET_UNIT:
      return {
        ...state,
        unit: action.payload,
      };
    case SET_ANIMATE:
      return {
        ...state,
        animate: action.payload,
      };
    default:
      return state;
  }
};

//*  Action Creators
export const setValueA = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_A,
      payload: data,
    });
  };
};
export const setValueB = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_B,
      payload: data,
    });
  };
};
export const setValueC = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_C,
      payload: data,
    });
  };
};
export const setValueO = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_O,
      payload: data,
    });
  };
};
export const setValueR = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_R,
      payload: data,
    });
  };
};
export const setValueG = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_G,
      payload: data,
    });
  };
};
export const setValueGSlope = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_G_SLOPE,
      payload: data,
    });
  };
};
export const setValueAModel = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_A_MODEL,
      payload: data,
    });
  };
};
export const setValueBModel = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_B_MODEL,
      payload: data,
    });
  };
};
export const setValueCModel = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_VALUE_C_MODEL,
      payload: data,
    });
  };
};
export const setFloor = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_FLOOR,
      payload: data,
    });
  };
};
export const setUnit = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_UNIT,
      payload: data,
    });
  };
};
export const setAnimate = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_ANIMATE,
      payload: data,
    });
  };
};
