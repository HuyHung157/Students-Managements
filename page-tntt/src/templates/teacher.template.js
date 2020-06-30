import React from "react";
import { Route } from "react-router-dom";
const TeacherLayout = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default function TeacherTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsComponent => (
                <TeacherLayout>
                    <Component {...propsComponent} />
                </TeacherLayout>
            )}
        />
    );
}