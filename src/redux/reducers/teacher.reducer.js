import * as ActionType from "../contants/ActionTypes";

let initialState = {
    listStudent: [],
    firstPage: false,
    lastPage: false,
    pageSize: 8,
    pageNumber: 0,
    detailStudent: [],
    disableUpdate: false,
};

const teacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_STUDENT:
            state.listStudent = action.listStudent;
            return { ...state };
        case ActionType.SET_PAGE_NUMBER:
            state.pageNumber = action.pageNumber;
            return { ...state };
        case ActionType.GET_DETAIL_STUDENT:
            state.detailStudent = action.detailStudent;
            return { ...state };
        default:
            return { ...state };
    }
};

export default teacherReducer;
