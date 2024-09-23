import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
const Pagination = (props) => {

    const { fristPage, lastPage, pageNumber, onPageChange } = props;
    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    const classes = useStyles();
    return (
        <div className="pagination">
            <div className="pagination__btn">
                <Button
                    variant="contained"
                    disabled={fristPage || pageNumber - 1 < 0}
                    className={`${classes.margin} btn__info`}
                    onClick={() => { handlePageChange(pageNumber - 1) }}
                >
                    <i className="fa fa-caret-left"></i>
                </Button>
                <Button
                    variant="contained"
                    className={`${classes.margin} btn__info`}
                >
                    {pageNumber + 1}
                </Button>
                <Button
                    variant="contained"
                    disabled={lastPage}
                    className={`${classes.margin} btn__info`}
                    onClick={() => { handlePageChange(pageNumber + 1) }}
                >
                    <i className="fa fa-caret-right"></i>
                </Button>
            </div>
        </div>
    );
}

export default Pagination;
