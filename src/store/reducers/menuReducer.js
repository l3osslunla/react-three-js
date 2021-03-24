//*  Action
const SET_VALUE_A = 'Menu/SET_VALUE_A';
const SET_VALUE_B = 'Menu/SET_VALUE_B';
const SET_VALUE_C = 'Menu/SET_VALUE_C';
const SET_VALUE_O = 'Menu/SET_VALUE_O';
const SET_VALUE_R = 'Menu/SET_VALUE_R';
const SET_VALUE_G = 'Menu/SET_VALUE_G';
const SET_VALUE_G_SLOPE = 'Menu/SET_VALUE_G_SLOPE';

//*  Initialize State
const initialState = {
  valueA: 250,
  valueB: 380,
  valueC: 220,
  valueO: 1,
  valueR: 40,
  valueG: 30,
  valueGSlope: 4,
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
