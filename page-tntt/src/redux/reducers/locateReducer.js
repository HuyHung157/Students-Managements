import * as ActionType from "../contants/ActionTypes";

let initialState = {
  listProvince: [],
  listDistrict: [],
  listWard: [],
  provinceCode: 0,
  districtCode: 0,
};

const locateReducer = (state = initialState, action) => {
  switch (action.type) {
    //Lấy DS các tỉnh thành
    case ActionType.GET_LIST_PROVINCE:
      state.listProvince = action.listProvince;
      return { ...state };
    case ActionType.SET_PROVINCE_CODE:
      state.provinceCode = action.provinceCode;
      console.log("reducer: state " + state.provinceCode)
      console.log("reducer: action " + action.provinceCode)
      return { ...state };
    case ActionType.GET_LIST_DISTRICT:
      state.listDistrict = action.listDistrict;
      return { ...state };
    case ActionType.SET_DISTRICT_CODE:
      state.districtCode = action.districtCode;
      return { ...state };
    case ActionType.GET_LIST_WARD:
      state.listWard = action.listWard;
      return { ...state };
    default:
      return { ...state };
  }
};

export default locateReducer;
