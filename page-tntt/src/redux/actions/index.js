import * as ActionTypes from "../contants/ActionTypes";
// import { locateService } from "../../service";
import { studentService } from "../../services";

export const actGetListStudent = (paramString) => {
    return dispatch => {
        studentService.GetStudent(paramString)
            .then(result => {
                // console.log(result.data.data)
                dispatch({
                    type: ActionTypes.GET_LIST_STUDENT,
                    listStudent: result.data.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const actSetPageNumber = (pageNumber) => {
    return {
        type: ActionTypes.SET_PAGE_NUMBER,
        pageNumber,
    };
};


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
