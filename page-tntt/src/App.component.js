import React, { Suspense } from 'react';
import './App.style.scss';
import PageNotFound from './pages/page-not-found/pageNotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesHome } from './routes';
import TeacherTemplate from './templates/teacher.template'

function App() {
  const showContentMenuHome = routesHome => {
    if (routesHome && routesHome.length > 0) {
      return routesHome.map((route, index) => {
        return (
          <TeacherTemplate
            key={index}
            path={route.path}
            exact={route.exact}
            Component={route.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {showContentMenuHome(routesHome)}
        {/* {showContentMenuAdmin(routesAdmin)} */}
        {/* <Route path="/dashboard" component={Admin} /> */}
        {/* Trang PageNotFound - để cuối cùng*/}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
