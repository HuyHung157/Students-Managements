import React from 'react';
import { Link } from 'react-router-dom';
import * as action from '../../../redux/actions'
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const signInUserSchema = Yup.object().shape({
    userName: Yup.string()
        .required('Vui lòng nhập tài khoản'),
    password: Yup.string()
        .required('Vui lòng nhập mật khẩu'),
})

const Login = () => {
    const classes = useStyles();
    const handleSubmit = (value) => {
        // event.preventDefault();
        // console.log(value);
        const user = {
            taiKhoan: value.userName,
            matKhau: value.password
        };

        this.props.signInUser(user, this.props.history);
    }

    return (
        <div className="page__login">
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                }}
                validationSchema={signInUserSchema}
                onSubmit={handleSubmit}
                render={formikProps => (
                    <div className="page__login-container">
                        <Form className=" form_login">
                            <a to="/" className="login__brand">Đoàn TNTT Gx. Nữ Vương Hòa Bình</a>
                            <img className="login_img" src="/img/NU VUONG HOA BINH.png" alt="img_logo" />
                            <div className="login__heading">
                                <h1 className="login__headingText">Đăng nhập</h1>
                            </div>
                            <Field
                                className={'input__userName_login form-control' + (formikProps.errors.userName && formikProps.touched.userName ? ' is-invalid' : '')}
                                type="text"
                                name="userName"
                                placeholder="Tài khoản"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="userName" component="span" className="invalid-feedback error " />
                            <Field
                                className={'input__password_login form-control' + (formikProps.errors.password && formikProps.touched.password ? ' is-invalid' : '')}
                                type="password"
                                name="password"
                                placeholder="Mật khẩu"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="password" component="span" className="invalid-feedback error " />
                            <div className={classes.root}>
                                <Button className="btn__submit_login" variant="contained" color="primary" type="submit" >Sign in</Button>
                            </div>
                            {/* <button className="btn__submit_login" type="submit">Sign in</button> */}
                            <a className="link__create_account" to="/sign-up">Create new account</a>
                            <div className="social__contact">
                                <ul className="contact__list contact__items">
                                    <li className="contact__item google">
                                        <a href="mailto:contact.tntt.nvhb@gmail.com?subject=Support From Website">
                                            <i class="fab fa-google"></i>
                                            <span>Liên hệ qua Email</span>
                                        </a>
                                    </li>
                                    <li className="contact__item facebook">
                                        <a href="https://www.facebook.com/%C4%90O%C3%80N-THI%E1%BA%BEU-NHI-TH%C3%81NH-TH%E1%BB%82-Gx-N%E1%BB%AE-V%C6%AF%C6%A0NG-H%C3%92A-B%C3%8CNH-444468152576275/" target="_blank">
                                            <i class="fab fa-facebook-f"></i>
                                            <span>Liên hệ qua Fanpage</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Form>
                    </div>
                )}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        // signInUser: (user, history) => {
        //     dispatch(action.actSignInAPI(user, history));
        // }
    }
}

export default connect(null, mapDispatchToProps)(Login);
