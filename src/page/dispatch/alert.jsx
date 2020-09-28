import { withStyles } from '@material-ui/core';
import React from 'react'
import style from './style'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

class Alert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: props.open
        }
    }


    render() {
        const { classes, data, handleClose } = this.props
      
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={this.state.open}
                onClose={this.props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={this.state.open}>
                    <div className={classes.paper2}>
                        <h2 id="transition-modal-title">成功</h2>
                        
                    </div>
                </Fade>
            </Modal>
        )
    }
}

export default withStyles(style, { withTheme: true })(Alert)