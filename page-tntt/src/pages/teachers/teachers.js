import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
// import SwipeableViews from 'react-swipeable-views';
import { Box, Paper, Typography, Tab, Tabs } from "@material-ui/core";

import StudentController from "./student-controller/studentController";
import ClassController from "./class-controller/classController";
import AcademicYear from "./academicYear-controller/academicYear";
import Header from "../../components/header/header";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function Teachers() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <div className="teacher__page" id="teacher" >
                <div className="teacher__padding">
                    <div className="teacher__cotainer">
                        <div className="teacher__control">
                            <Paper >
                                <img className="img__logo" src="/img/NU VUONG HOA BINH.png" />
                                <Tabs
                                    orientation="vertical"
                                    variant="scrollable"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs example"
                                    className={`${classes.tabs} list__control`}
                                >
                                    <Tab className="control__item"
                                        label={<ul><li><i className="fa fa-user-graduate"></i></li><li><span>ĐOÀN SINH</span></li></ul>}
                                        {...a11yProps(0)}
                                    />
                                    <Tab className="control__item"
                                        label={<ul><li><i className="fa fa-school"></i></li><li><span>LỚP</span></li></ul>}
                                        {...a11yProps(1)}
                                    />
                                    <Tab className="control__item"
                                        label={<ul><li><i className="fa fa-cross"></i></li><li><span>NĂM HỌC</span></li></ul>}
                                        {...a11yProps(2)}
                                    />
                                </Tabs>
                            </Paper>
                        </div>
                        <div className="teacher__content">
                            <Header />
                            {/* <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                                className="content--bot"
                            > */}
                            <div className="content--bot">
                                {/* TAB_CONTENT */}
                                <TabPanel value={value} index={0}>
                                    <StudentController />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <ClassController />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <AcademicYear />
                                </TabPanel>
                            </div>
                            {/* </SwipeableViews> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
