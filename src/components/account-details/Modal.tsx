import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, IconButton } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import PasswordProtected from '../../assets/images/svg/password-protected.svg'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Modal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <IconButton><CloseRoundedIcon /></IconButton>
                <img src={PasswordProtected} alt="" />
                <DialogTitle id="responsive-dialog-title" textAlign='center'>
                    {"Password Updated"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText textAlign='center'>
                        Your password has been changed successfully
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal;
