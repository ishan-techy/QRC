import React, { useState } from 'react';
import { Button, Dialog, Slide, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import imgBase from './assets/viewcircle_.png'
import qrImg from './assets/Mask group.png'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function QRC() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open QR Code
            </Button>
            <Dialog
                fullScreen
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        maxHeight: '75%',
                        height: '75%',
                        borderTopRightRadius: '20px',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                    },
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                        <Typography variant='h5' style={{ fontWeight: '700', padding: '10px' }}>QR code scanning</Typography>
                        <IconButton aria-label="close" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={imgBase} alt="QR Code" style={{ width: 'auto', padding: 'auto' }} />
                        <img src={qrImg} alt="QR Code" style={{ position: 'absolute', width: 'auto', padding: 'auto' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                        <Typography variant="body1" gutterBottom style={{ lineHeight: '1.5' }}>
                            Your three line paragraph goes here. It can contain additional information about QR code scanning or any other relevant details.
                        </Typography>
                    </div>
                </div>
                <div style={{ padding: '0 10px  10px 10px' }}>
                    <Button style={{ height: '55px', borderRadius: '8px', background: 'white', border: '1px solid grey', fontWeight: '700' }} fullWidth variant="contained" >
                        Cancel
                    </Button>
                </div>
                <div style={{ padding: '0 10px  10px 10px' }}>
                    <Button style={{ height: '55px', borderRadius: '8px', background: 'linear-gradient(to right,#606060 ,#1d1c1f', color: 'white', fontWeight: '700' }} fullWidth variant="contained" >
                        Continue
                    </Button>
                </div>
            </Dialog>
        </div>
    );
}
