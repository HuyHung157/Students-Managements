import React, { useEffect } from 'react';
import ListStudent from './components/listStudent/listStudent';
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

