import React from 'react';
import ListStudent from './components/student-list/studentList.component';
// import DetailStudent from './components/deatailStudent/detailStudent';

const StudentController = () => {

    return (
        <div className="student__controller">
            {/* <DetailStudent /> */}
            <ListStudent />
        </div>
    );
}


export default StudentController;

