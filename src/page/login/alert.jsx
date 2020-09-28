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
        console.log(data)
        let reason = ''
        if (data.type === 0) {
            reason = '登入成功'
        } else if (data.type === 1) {
            reason = '錯誤密碼'
        } else {
            reason = '伺服器出錯，請回報'   
        }
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
                        <h2 id="transition-modal-title">{data.msg}</h2>
                        <p id="transition-modal-description">{reason} {data.type === 0 ? "歡迎" + data.data.name : ""}</p>
                    </div>
                </Fade>
            </Modal>
        )
    }
}

export default withStyles(style, { withTheme: true })(Alert)