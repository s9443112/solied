import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import style from './style'
import { Table, TableBody, TableCell, TableHead, TableRow, Grid, TextField, Button, Paper, Container, Dialog, Slide, AppBar, Toolbar, Typography } from '@material-ui/core';
import Title from '../../libs/title'
import InfoIcon from '@material-ui/icons/Info';
import DetailTable from './table'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import QrReader from 'react-qr-reader'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import * as request from '../../request/index'
import Alert from './alert'
// Generate Order Data
function createData(id, order, item, dispatch, start_time, end_time) {
    return { id, order, item, dispatch, start_time, end_time };
}

const rows = [
    createData(0, 'ICS(9001)-20200204', 'E12-P1-63A-FJ-1(71600)', 100, '2020/06/10 15:23:18', '2020/06/10 15:23:18'),
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const DialogTitle = withStyles(style)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


const machine = [
    {
        "title": "沖壓(260頓)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": true,
        "layout": 2
    },
    {
        "title": "沖壓(110頓)",
        "target": undefined,
        "amount": undefined,
        "percent": undefined,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": true,
        "layout": 2
    }
]

const order = [
    {
        "name": "20200916"
    },
    {
        "name": "20200917"
    },
]


class Dispatcher extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            machine_html: undefined,
            order_html: undefined,
            product_nub: undefined,
            person: undefined,
            result: 'No result',

        }
    }

    async componentDidMount() {
        this.props.handleChangeValue(this.props.title)
        const { classes } = this.props;

        let machine_html = []
        let product_number = []
        let order_html = []
        let person = []
        let machine_list = await request.get_machine()
        let order_list = await request.get_order()
        let order_content_list = await request.get_order_content()
        let person_list = await request.get_user()
        console.log(order_content_list)
        for (let i in machine_list) {
            machine_html.push(<MenuItem key={i} value={machine_list[i]._id}>{machine_list[i].name}</MenuItem>)
        }
        for (let i in order_list) {
            order_html.push(<MenuItem key={i} value={order_list[i]._id}>{order_list[i]._id}</MenuItem>)
        }
        for (let i in order_content_list) {
            product_number.push(<MenuItem key={i} value={order_content_list[i].product_number}>{order_content_list[i].product_number}</MenuItem>)
        }
        for (let i in person_list) {
            person.push(<MenuItem key={i} value={person_list[i]._id}>{person_list[i]._id}</MenuItem>)
        }

        // for (let i in order) {
        //     order_html.push(<MenuItem key={i} value={order[i].name}>{order[i].name}</MenuItem>)
        // }
        this.setState({
            machine_html: <>
                <FormControl className={classes.formControl} >
                    <InputLabel id="demo-machine-select-label">機器</InputLabel>
                    <Select
                        labelId="machine-select-label"
                        id="machine-select"
                        onChange={e => this.setState({ machine: e.target.value })}
                    >
                        {machine_html}
                    </Select>
                </FormControl>
                <Button color="primary" variant="contained" style={{ padding: '15px 15px 15px 15px', }} onClick={this.handleOpenScan}>QRCODE</Button>
            </>,
            order_html: <>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-order-select-label">工單</InputLabel>
                    <Select
                        labelId="order-select-label"
                        id="order-select"
                        onChange={e => this.setState({ order: e.target.value })}
                    >
                        {order_html}
                    </Select>
                </FormControl>
                <Button color="primary" variant="contained" style={{ padding: '15px 15px 15px 15px', }} onClick={this.handleOpenScan}>QRCODE</Button>
            </>,
            product_number: <>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-product_number-select-label">機型</InputLabel>
                    <Select
                        labelId="product_number-select-label"
                        id="product_number-select"
                        onChange={e => this.setState({ product_nub: e.target.value })}
                    >
                        {product_number}
                    </Select>
                </FormControl>
                <Button color="primary" variant="contained" style={{ padding: '15px 15px 15px 15px', }} onClick={this.handleOpenScan}>QRCODE</Button>
            </>,
            person: <>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-person-select-label">人員</InputLabel>
                    <Select
                        labelId="person-select-label"
                        id="person-select"
                        onChange={e => this.setState({ uid: e.target.value })}
                    >
                        {person}
                    </Select>
                </FormControl>
                <Button color="primary" variant="contained" style={{ padding: '15px 15px 15px 15px', }} onClick={this.handleSend}>QRCODE</Button>
            </>,
        })

    }

    handleOpenScan = () => {
        this.setState({ open: true })
    }

    //QRCODE SCANNED AFTER
    handleScan = data => {
        if (data) {
            this.setState({
                result: undefined,
                open: false
            })
        }
    }
    //QRCODE SCANNED ERROR
    handleError = err => {
        console.error(err)
        this.setState({
            open: false,
            result: undefined
        })
    }
    handleCCClose = () => {
        this.setState({ result: undefined })
    };

    handleClose = () => {
        this.setState({ open: false })
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state)
        let result = await request.insert_dispatch({
            "machine": this.state.machine,
            "order": this.state.order,
            "product_nub": this.state.product_nub,
            "uid": this.state.uid
        })
        console.log(result)
        this.setState({ result: <Alert open={true} data={result} handleClose={this.handleCCClose} /> })
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Paper className={classes.Dispatchpaper}>
                                <form className={classes.form} onSubmit={this.handleSubmit} >
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                            {this.state.machine_html}

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                            {this.state.order_html}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                            {this.state.product_number}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                            {this.state.person}
                                        </Grid>
                                    </Grid>

                                    <Button type="submit" color="primary" variant="contained" style={{ padding: '15px 15px 15px 15px', }} >送出派工單</Button>
                                </form>
                                {this.state.result}
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>

                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose} style={{ width: '500px' }}>
                        QRCODE SCANNER
        </DialogTitle>
                    <DialogContent dividers>
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%' }}
                        />
                    </DialogContent>
                </Dialog>


                {this.state.result}

            </React.Fragment>
        );
    }
}

export default withStyles(style, { withTheme: true })(Dispatcher);