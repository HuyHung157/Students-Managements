import * as ActionTypes from "../contants/ActionTypes";
import { teacherService } from '../../services'

class TeacherAction {

    actGetListStudent = (paramString) => {
        return dispatch => {
            teacherService.GetStudent(paramString)
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

    actSetPageNumber = (pageNumber) => {
        return {
            type: ActionTypes.SET_PAGE_NUMBER,
            pageNumber,
        };
    };

    actGetDetailStudent = (id) => {
        return dispatch => {
            teacherService.GetDetailStudent(id)
                .then(result => {
                    // console.log(result.data.data)
                    dispatch({
                        type: ActionTypes.GET_DETAIL_STUDENT,
                        detailStudent: result.data.data
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        };
    }
}
export default TeacherAction;
