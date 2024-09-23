import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../../redux/actions';
import { Link } from 'react-router-dom';
import Header from '../../../../../components/header/header.compoent'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Date Picker
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
// Grid
import Grid from '@material-ui/core/Grid';
import Sacraments from './sacraments/sacraments.component';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        flexGrow: 1,
    },
}));

const DetailStudent = (props) => {
    const classes = useStyles();
    // Date Picker
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-01T00:00:00'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    function getE(id) {
        return document.getElementById(id);
    }

    const id = props.match.params.id;
    const pathName = props.location.pathname;
    const isUpdatePage = (pathName != "/create-student")
    useEffect(() => {
        console.log(isUpdatePage)
        if (isUpdatePage) {
            getE("btn__edit_info").style.display = "block";
            getE("btn__update_student").style.display = "block";
            getE("title").innerHTML = "THÔNG TIN CHI TIẾT";
            // getE("group__input_baptism").style.display = "block";
            // if (getE("baptism__checkbox").checked = true) {
            //     getE("group__input_eucharist").style.display = "block";
            // }
        } else {
            getE("title").innerHTML = "THÊM ĐOÀN SINH"
            getE("btn__edit_info").style.display = "none";
            getE("btn__add_student").style.display = "block";
            // getE("group__input_baptism").style.display = "block";
        }
        props.GetDetail(id);
    }, []);

    function handleChangeSibling(e) {
        let isChecked = e.target.checked;
        if (isChecked) {
            getE("advance__info").style.display = "none";
            getE("sibling__info").style.display = "block";
        } else {
            getE("advance__info").style.display = "block";
            getE("sibling__info").style.display = "none";
        }
    }

    console.log(props)

    function handleClickIsUpdate() {
        console.log("btn ok");
    }
    function handleClickExit() {
        console.log("btn handleClickExit ok");
    }
    function handleClickUpdate() {
        console.log("btn handleClickUpdate ok");
    }
    function handleClickAdd() {
        console.log("btn handleClickAdd ok");
    }
    function handleClickAddParents() {
        console.log("btn handleClickAddParents ok");
    }

    return (
        <div className={`${classes.root} info__page`}>
            <Header className="header__info" />
            <div className="header__group">
                <Link className="logo__back" to="/">
                    <i className="fa fa-arrow-left"></i>
                </Link>
                <h2 className="title" id="title"></h2>
                <Button
                    className="btn__edit_info"
                    id="btn__edit_info"
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleClickIsUpdate}
                >
                    Sửa Thông Tin
                </Button>
            </div>
            <div className="group__detail">
                <div className="basic__info">
                    <Grid container container direction="row" justify="center" alignItems="center" spacing={2} >
                        <Grid item xs={6} sm={6} lg={2}>
                            <label htmlFor="selection__saint">Tên thánh</label>
                            <select id="selection__saint">
                                <option>Giuse</option>
                            </select>
                        </Grid>
                        <Grid item xs={6} sm={6} lg={4}>
                            <label htmlFor="input__fullName">Họ tên</label>
                            <input type="text" id="input__fullName name" placeholder="Nguyễn Văn A" />
                        </Grid>
                        <Grid item xs={6} sm={6} lg={2}>
                            <label htmlFor="selection__gender">Giới tính</label>
                            <select id="selection__gender">
                                <option>Nam</option>
                                <option>Nữ</option>
                            </select>
                        </Grid>
                        <Grid item xs={6} sm={6} lg={2}>
                            <label htmlFor="date-picker-birthday">Ngày sinh</label>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-birthday"
                                    // label="Date picker inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={6} sm={6} lg={2}>
                            <label htmlFor="input__birthday-place">Nơi sinh</label>
                            <input type="text" id="input__birthday-place" placeholder="Hồ Chí Minh" />
                        </Grid>
                    </Grid>
                </div>
                <input type="checkbox" className="checkbox__option" id="sibling" onChange={e => handleChangeSibling(e)} />
                <label htmlFor="sibling" className="checkbox__option">Sử dụng thông tin của anh chị em ruột</label>
                <div className="advance__info" id="advance__info">
                    <div className="address__group--info">
                        <Grid container spacing={1}>
                            <Grid item xs={9} sm={9} lg={6}>
                                <label htmlFor="input__addressLine">Địa chỉ nhà</label>
                                <input type="text" id="input__addressLine" placeholder="123, Lê Đức Thọ, P 13, Q Gò Vấp" />
                            </Grid>
                            <Grid item xs={3} sm={3} lg={2}>
                                <label htmlFor="selection__ward">Phường</label>
                                <select id="selection__ward">
                                    <option>13</option>
                                    <option>12</option>
                                </select>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={2}>
                                <label htmlFor="selection__district">Quận</label>
                                <select id="selection__district">
                                    <option>Gò Vấp</option>
                                    <option>Quận 12</option>
                                </select>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={2}>
                                <label htmlFor="selection__pronvince">Thành phố</label>
                                <select id="selection__pronvince">
                                    <option>Hồ Chí Minh</option>
                                    <option>Nữ</option>
                                </select>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="parents__group--info">
                        <Grid container spacing={1}>
                            <Grid item xs={2} sm={2} lg={1}>
                                <label htmlFor="selection__role-parents">Vai trò</label>
                                <select id="selection__role-parents">
                                    <option>Cha</option>
                                    <option>Mẹ</option>
                                </select>
                            </Grid>
                            <Grid item xs={4} sm={4} lg={2}>
                                <label htmlFor="selection__saint-parents">Tên thánh</label>
                                <select id="selection__saint-parents">
                                    <option>Giuse</option>
                                </select>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={3}>
                                <label htmlFor="input__fullName-parents">Họ tên</label>
                                <input type="" id="input__fullName-parents name" placeholder="Nguyễn Văn A" />
                            </Grid>
                            <Grid item xs={6} sm={6} lg={2}>
                                <label htmlFor="date-picker-birthday-parent">Ngày sinh</label>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-birthday-parent"
                                        // label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={2}>
                                <label htmlFor="input__phoneNumber-parents">Số ĐT</label>
                                <input type="number" id="input__phoneNumber-parents" placeholder="0912345678" />
                            </Grid>
                            <Grid item xs={12} sm={12} lg={2}>
                                <label htmlFor="input__note">Ghi chú</label>
                                <textarea id="input__note" />
                            </Grid>
                        </Grid>
                        <Button
                            className="btn__add__parent"
                            variant="contained"
                            color="primary"
                            type="button"
                            onClick={handleClickAddParents}
                        >
                            <i className="fa fa-plus"></i> Thêm người bảo hộ
                    </Button>
                    </div>
                </div>
                <div className="sibling__info" id="sibling__info">
                    <Grid container spacing={1}>
                        <Grid item xs={12} >
                            <h3>Tên anh chị em ruột</h3>
                            <div className="group__search"><input type="text" className="search__sibling" id="search__sibling" />
                                <i className="fa fa-search"></i></div>
                        </Grid>
                        <Grid item xs={12} >
                            <Button
                                className="btn__confirm__sibling"
                                variant="contained"
                                color="primary"
                                type="button"
                            // onClick={handleClick}
                            >
                                <i className="fa fa-download"></i> Chọn thông tin
                            </Button>
                        </Grid>
                        <Grid item xs={12} >
                            <div className="info__sibling">
                                <h3>Địa chỉ: <p> 123, Lê Đức Thọ, P12, Q.GV</p> </h3>
                                <h3>Người bảo hộ: </h3>
                                <p>1. Cha Trần Huy Hùng , 1998, +84908559709, nhân viên</p>
                                <p>1. Cha Trần Huy Hùng , 1998, +84908559709, nhân viên</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <hr />
                <Sacraments />
            </div>
            <div className="btn__group">
                <div className="btn__group--container">
                    <Button
                        className="btn__exit"
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={handleClickExit}
                    >
                        Thoát
                    </Button>
                    <Button
                        className="btn__update_student"
                        id="btn__update_student"
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={handleClickUpdate}
                    >
                        Cập nhật
                    </Button>
                    <Button
                        className="btn__add_student"
                        id="btn__add_student"
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={handleClickAdd}
                    >
                        Thêm
                    </Button>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        detailStudent: state.teacherReducer.detailStudent,
        isDisable: state.teacherReducer.disableUpdate,
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        GetDetail: (id) => {
            dispatch(actions.teacherAction.actGetDetailStudent(id));
        },
        // selectSeat: seat => {
        //     dispatch(actions.actSelectSeat(seat));
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailStudent);
