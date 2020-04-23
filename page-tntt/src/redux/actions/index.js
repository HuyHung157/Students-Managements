import * as ActionTypes from "../contants/ActionTypes";
// import { locateService } from "../../service";

// export const actGetListProvinceAPI = () => {
//   return dispatch => {
//     locateService.GetProvince()
//       .then(result => {
//         // console.log(result.data.ResponseData)
//         dispatch({
//           type: ActionTypes.GET_LIST_PROVINCE,
//           listProvince: result.data.ResponseData
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };

// export const actSetProvinceCode = provinceCode => {
//   console.log("action: " + provinceCode)
//   return {
//     type: ActionTypes.SET_PROVINCE_CODE,
//     provinceCode
//   }
// }

// export const actSetDistrictCode = districtCode => {
//   return {
//     type: ActionTypes.SET_DISTRICT_CODE,
//     districtCode
//   }
// }

// export const actGetListDistrictAPI = (districtCode) => {
//   // console.log(districtCode)
//   return dispatch => {
//     locateService.GetDistrict(districtCode)
//       .then(result => {
//         dispatch({
//           type: ActionTypes.GET_LIST_DISTRICT,
//           listDistrict: result.data.ResponseData
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };

// export const actGetListWardAPI = (provinceCode, districtCode) => {
//   return dispatch => {
//     locateService.GetWard(provinceCode, districtCode)
//       .then(result => {
//         dispatch({
//           type: ActionTypes.GET_LIST_WARD,
//           listWard: result.data.ResponseData
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };
