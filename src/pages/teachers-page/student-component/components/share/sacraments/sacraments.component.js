import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Date Picker
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
// Grid
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        flexGrow: 1,
    },
}));

const Sacraments = (props) => {

    const classes = useStyles();
    // Date Picker
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-01T00:00:00'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    function getE(id) {
        return document.getElementById(id);
    }
    function handleBaptism(e) {
        let isChecked = e.target.checked;
        if (isChecked) {
            getE("group__input_baptism").style.display = "block";
            // getE("eucharist__checkbox").checked = true;
        } else {
            getE("group__input_baptism").style.display = "none";
        }
    }
    function handleEucharist(e) {
        let isChecked = e.target.checked;
        if (isChecked) {
            getE("group__input_eucharist").style.display = "block";
        } else {
            getE("group__input_eucharist").style.display = "none";
        }
    }
    function handleComfirmation(e) {
        let isChecked = e.target.checked;
        if (isChecked) {
            getE("group__input_comfirmation").style.display = "block";
        } else {
            getE("group__input_comfirmation").style.display = "none";
        }
    }

    return (
        <div className="sacraments__info">
            <h3>Bích tích đã nhận: </h3>
            <div className="baptism__group">
                <input type="checkbox" className="checkbox__option" id="baptism__checkbox" onChange={e => handleBaptism(e)} />
                <label htmlFor="baptism__checkbox" className="checkbox__option">Rửa tội</label>
                <div className="group__input_baptism" id="group__input_baptism">
                    <Grid container spacing={3}>
                        <Grid container item xs={6} lg={3} spacing={3}>
                            <Grid item xs={12} >
                                <label htmlFor="date-picker-baptism" >Ngày nhận bí tích</label>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-baptism"
                                        // label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12} >
                                <lable htmlFor="place-receipt" >Tại giáo xứ</lable>
                                <input type="text" id="place-receipt" placeholder="Nữ Vương Hòa Bình" />
                            </Grid>
                        </Grid>
                        <Grid container item xs={6} lg={3} spacing={3}>
                            <Grid item xs={12} >
                                <lable htmlFor="priest">Bởi LM/GM</lable>
                                <input type="text" id="priest" placeholder="" />
                            </Grid>
                            <Grid item xs={12} >
                                <lable htmlFor="parents" >Người đỡ đầu</lable>
                                <input type="text" id="parents" placeholder="Nguyễn Văn A" />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} lg={6} spacing={3}>
                            <Grid item xs={12} >
                                <lable htmlFor="note" >Ghi chú</lable>
                                <textarea type="text" id="note" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <input type="checkbox" className="checkbox__option" id="eucharist__checkbox" onChange={e => handleEucharist(e)} />
                    <label htmlFor="eucharist__checkbox" className="checkbox__option">Rước lễ</label>
                </div>
            </div>
            <div className="eucharist__group">
                <div className="group__input_eucharist" id="group__input_eucharist">
                    <Grid container spacing={3}>
                        <Grid container item xs={6} lg={3} spacing={3}>
                            <Grid item xs={12} >
                                <label htmlFor="date-picker-eucharist" >Ngày nhận bí tích</label>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-eucharist"
                                        // label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12} >
                                <lable htmlFor="place-receipt" >Tại giáo xứ</lable>
                                <input type="text" id="place-receipt" placeholder="Nữ Vương Hòa Bình" />
                            </Grid>
                        </Grid>
                        <Grid container item xs={6} lg={3} spacing={3}>
                            <Grid item xs={12} >
                                <lable htmlFor="priest">Bởi LM/GM</lable>
                                <input type="text" id="priest" placeholder="" />
                            </Grid>
                            <Grid item xs={12} >
                                <lable htmlFor="parents" >Người đỡ đầu</lable>
                                <input type="text" id="parents" placeholder="Nguyễn Văn A" />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} lg={6} spacing={3}>
                            <Grid item xs={12} >
                                <lable htmlFor="note" >Ghi chú</lable>
                                <textarea type="text" id="note" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <input type="checkbox" className="checkbox__option" id="comfirmation__checkbox" onChange={e => handleComfirmation(e)} />
                    <label htmlFor="comfirmation__checkbox" className="checkbox__option">Thêm sức</label>
                </div>
            </div>
            <div className="comfirmation__group">

                <div className="group__input_comfirmation" id="group__input_comfirmation">
                    <Grid container spacing={3}>
                        <Grid container item xs={6} lg={3} spacing={3}>
                            <Grid item xs={12} >
                                <label htmlFor="date-picker-comfirmation" >Ngày nhận bí tích</label>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-comfirmation"
                                        // label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12} >
                                <lable htmlFor="place-receipt" >Tại giáo xứ</lable>
                                <input type="text" id="place-receipt" placeholder="Nữ Vương Hòa Bình" />
                            </Grid>
                        </Grid>
                        <Grid container item xs={6} lg={3} spacing={3}>
                            <Grid item xs={12} >
                                <lable htmlFor="priest">Bởi LM/GM</lable>
                                <input type="text" id="priest" placeholder="" />
                            </Grid>
                            <Grid item xs={12} >
                                <lable htmlFor="parents" >Người đỡ đầu</lable>
                                <input type="text" id="parents" placeholder="Nguyễn Văn A" />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} lg={6} spacing={3}>
                            <Grid item xs={12} >
                                <lable htmlFor="note" >Ghi chú</lable>
                                <textarea type="text" id="note" />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className="note__student">
                        <label htmlFor="note__student"><h3>Ghi chú về đoàn sinh</h3></label>
                        <textarea id="note__student" />
                    </div>
                </Grid>
            </Grid>
        </div>

    );
}

export default Sacraments;
