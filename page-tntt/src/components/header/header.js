import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Menu, MenuItem, ListItemText } from '@material-ui/core';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const handleSignOut = () => {
    this.props.signOutUser();
    // console.log("abc")
}

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header">
            <ul>
                <li>
                    <h1 className="header__name">ĐOÀN THIẾU NHI THÁNH THỂ GIÁO XỨ NỮ VƯƠNG HÒA BÌNH</h1>
                </li>
                <li>
                    <Button
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                    >
                        <ul className="header__user">
                            <li className="avatar-item"><img className="header__avatar" src="/img/boss.png" alt="" /></li>
                            <li className=""><p><span>Chào, Trưởng </span><span>Hùng</span></p></li>
                        </ul>
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem>
                            <ListItemText primary="Thông tin tài khoản" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemText primary="Đăng xuất" />
                        </StyledMenuItem>
                    </StyledMenu></li>
            </ul>
        </div>
    );
}

export default Header;
