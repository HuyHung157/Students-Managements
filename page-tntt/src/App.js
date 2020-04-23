import React from 'react';
import './App.scss';
import StudentController from './pages/teachers/student-controller/studentController';
import Login from './pages/auth/login/login';
function App() {
  return (
    <div className="App">
      {/* <StudentController /> */}
      <Login />
    </div>
  );
}

export default App;
