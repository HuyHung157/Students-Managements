import React, { useEffect, useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Pagination from './pagination/pagination.component';
import { connect } from "react-redux";
import * as actions from '../../../../../redux/actions';
import FilterList from './filter/filter.component';
import queryString from 'query-string';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const ListStudent = (props) => {
    // const { pageNumber, pageSize } = props;
    const [filters, setFilters] = useState({
        pageNumber: props.pageNumber,
        pageSize: props.pageSize,
    });

    const paramString = queryString.stringify(filters);
    // console.log(paramString);

    useEffect(() => {
        props.GetList(paramString);
    }, [filters]);

    function handleChangePage(newPage) {
        props.setPage(newPage);
        // console.log('New page: ', newPage);
        setFilters({
            ...filters,
            pageNumber: newPage,
        });
    }

    function handleFilterChange(newFilter) {
        console.log(newFilter.searchTerm);
        props.setPage(0);
        setFilters({
            ...filters,
            // set page = 1
            pageNumber: 0,
            fullName: newFilter.searchTerm,
        });
    }

    function handleFilterBirthday(newFilter) {
        props.setPage(0);
        setFilters({
            ...filters,
            // set page = 1
            pageNumber: 0,
            dob: newFilter.searchTermBirthDay,
        });
    }

    const classes = useStyles();
    const renderItemStudent = (listStudent) => {
        if (listStudent && listStudent.length > 0) {
            return listStudent.map((item, index) => {
                return (
                    <tr key={index} className="student__item">
                        <td className="col__id">{item.id}</td>
                        <td className="item__saint ">{item.canonicalSaintName}</td>
                        <td className="item__fullName ">{`${item.lastName} ${item.firstName}`}</td>
                        <td className="item__birthday ">{item.dob}</td>
                        {/* <td className="item__birthday ">{item.dob.toString().replace(/\B(?=(\d{2})+(?!\d))/g, "/")}</td> */}
                        <td className="item__eucharist"><input type="checkbox" disabled checked={item.eucharist} name="ruocle" /></td>
                        <td className="item__confirmation"><input type="checkbox" disabled checked={item.confirmation} name="themsuc" /></td>
                        <td className="control">
                            <Button
                                variant="contained"
                                color="primary"
                                className={`${classes.margin} btn__info`}
                            // onClick={}
                            >
                                <Link
                                    className="btn btn-success card_btn_detail"
                                    to={`/detail-student/${item.id}`}
                                >
                                    <i className="fa fa-eye"></i><span>Chi tiết</span>
                                </Link>
                            </Button>
                        </td>
                    </tr>
                )
            })
        }
    }
    return (
        <div className="listStudent">
            <ul>
                <li><h2 className="listStudent__title">DANH SÁCH ĐOÀN SINH</h2></li>
                <li>
                    <FilterList onSubmit={handleFilterChange} onSubmitBirthDay={handleFilterBirthday} />
                </li>
            </ul>
            <div className="create__student">
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" className={classes.margin}>
                        <Link to="/create-student"><i className="fa fa-plus"></i> <span>Thêm Đoàn Sinh</span></Link>
                    </Button>
                </ThemeProvider>
            </div>
            <div className="table__listStudent">
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th className="item__id">ID</th>
                            <th className="item__saint">Tên thánh</th>
                            <th className="item__fullName">Họ tên</th>
                            <th className="item__birthday">Ngày sinh</th>
                            <th className="item__eucharist sacraments">Rước lễ</th>
                            <th className="item__confirmation sacraments">Thêm Sức</th>
                            <th className="item__control control">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItemStudent(props.listStudent)}
                    </tbody>
                </table>
            </div>
            <Pagination
                firstPage={props.firstPage}
                lastPage={props.lastPage}
                pageNumber={props.pageNumber}
                onPageChange={handleChangePage}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        listStudent: state.teacherReducer.listStudent.content,
        firstPage: state.teacherReducer.listStudent.first,
        lastPage: state.teacherReducer.listStudent.last,
        pageNumber: state.teacherReducer.pageNumber,
        pageSize: state.teacherReducer.pageSize,
        searchName: state.teacherReducer.searchName,
        searchBirthday: state.teacherReducer.searchBirthday,
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        GetList: (paramString) => {
            dispatch(actions.teacherAction.actGetListStudent(paramString));
        },
        setPage: (newPage) => {
            dispatch(actions.teacherAction.actSetPageNumber(newPage));
        },
        // selectSeat: seat => {
        //     dispatch(actions.actSelectSeat(seat));
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListStudent);
