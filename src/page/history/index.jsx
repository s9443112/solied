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

import * as request from '../../request/index'

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

class History extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            rows: [],
            machine_html: undefined
        }
    }

    async componentDidMount() {
        const { classes } = this.props
        this.props.handleChangeValue(this.props.title)
        let data = await request.get_order()
        let rows = []
        for (let i in data) {
            rows.push(createData(i, data[i]["_id"], data[i].product_name, data[i].total_count, data[i].start_date, data[i].shipment))
        }
        this.setState({ rows: rows })

        let machine_html = []
        let machine = await request.get_machine()
        for (let i in machine) {
            console.log(machine[i].name)
            machine_html.push(<MenuItem key={i} value={machine[i].name}>{machine[i].name}</MenuItem>)
        }
        this.setState({
            machine_html: <FormControl className={classes.formControl}>
                <InputLabel id="demo-machine-select-label">機器</InputLabel>
                <Select
                    labelId="machine-select-label"
                    id="machine-select"

                >
                    {machine_html}
                </Select>
            </FormControl>
        })

    }

    handleOpen = (index) => {
        this.setState({ open: true })
        console.log(index)

    };

    handleClose = () => {
        this.setState({ open: false })
    };

    render() {
        const { classes } = this.props;
        console.log(this.state.rows)
        return (
            <React.Fragment>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <FormControl className={classes.formControl}>
                                            
                                            <TextField
                                                id="datetime-local"
                                                label="開始時間"
                                                type="datetime-local"
                                                defaultValue="2017-05-24T10:30"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            
                                            <TextField
                                                id="datetime-local"
                                                label="結束時間"
                                                type="datetime-local"
                                                defaultValue="2017-05-24T10:30"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                        {this.state.machine_html}
                                        <Button className={classes.button} variant="contained" color="primary">搜尋</Button>
                                    </Grid>


                                    <Grid item xs={12} sm={6} md={2} lg={2}>
                                        
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={2} lg={2}>
                                        
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Paper className={classes.paper}>
                                <Title>歷史紀錄</Title>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>工單</TableCell>
                                            <TableCell>品號</TableCell>
                                            <TableCell>派工量</TableCell>
                                            <TableCell>開始時間</TableCell>
                                            <TableCell>結束時間</TableCell>
                                            <TableCell>詳細</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.rows.map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.order}</TableCell>
                                                <TableCell>{row.item}</TableCell>
                                                <TableCell>{row.dispatch}</TableCell>
                                                <TableCell>{row.start_time}</TableCell>
                                                <TableCell>{row.end_time}</TableCell>
                                                <TableCell><InfoIcon onClick={() => this.handleOpen(row.order)} /></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

                <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                派工單
                            </Typography>
                            <Button autoFocus color="inherit" onClick={this.handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.paperModal}>
                        <DetailTable />
                    </div>
                </Dialog>


            </React.Fragment>
        );
    }
}

export default withStyles(style, { withTheme: true })(History);