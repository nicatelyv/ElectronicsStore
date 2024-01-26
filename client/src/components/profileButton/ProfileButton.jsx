import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./style.scss"

export default function AccountMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { t } = useTranslation();
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title={t("Account settings")}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 0 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <h3 style={{ fontSize: "20px", marginTop: "5px" }}>{localStorage.getItem("firstName")}</h3>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link className='profileA' to={'/hesabim'}>
                    <MenuItem onClick={handleClose} style={{ color: 'black' }}>
                        <Avatar /> {t("My Account")}
                    </MenuItem>
                </Link>
                <Divider />
                {/* <Link to={'/giris'}><MenuItem onClick={handleClose} style={{ color: 'black' }}>
                    <ListItemIcon>
                        <i class="fa-solid fa-user-plus"></i>
                    </ListItemIcon>
                    {t("Add another account")}
                </MenuItem>
                </Link> */}
                <Link className='profileA' to={'/hesabim/parametrler'}>
                    <MenuItem onClick={handleClose} style={{ color: 'black' }}>
                        <ListItemIcon>
                            <i class="fa-solid fa-gear"></i>
                        </ListItemIcon>
                        {t("Settings")}
                    </MenuItem>
                </Link>
                <Link className='profileA' to={'/logout'}>
                    <MenuItem onClick={handleClose} style={{ color: 'black' }}>
                        <ListItemIcon>
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </ListItemIcon>
                        {t("Logout")}
                    </MenuItem>
                </Link>
            </Menu>
        </React.Fragment>
    );
}