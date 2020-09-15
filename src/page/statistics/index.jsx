import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import style from './style'
import { Table, TableBody, TableCell, TableHead, TableRow, Grid, TextField, Button, Paper,Typography,Divider } from '@material-ui/core';

// Generate Order Data
function createData(id, station, start_time, end_time) {
    return { id, station, start_time, end_time };
}

const rows = [
    createData(0, '沖壓(120頓)', '2020/06/10 15:23:18', '2020/06/10 15:23:18'),
    createData(1, '點焊', '2020/06/10 15:23:18', '2020/06/10 15:23:18')

];


class Statistics extends React.Component {
    
    componentDidMount(){
        this.props.handleChangeValue(this.props.title)
    }
    render() {
        const { classes } = this.props;
        
        return (
            <React.Fragment>

                
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Paper>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                        <TextField
                                            required
                                            id="firstName"
                                            name="firstName"
                                            label="客戶"
                                            fullWidth
                                            autoComplete="given-name"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                        <TextField
                                            required
                                            id="lastName"
                                            name="lastName"
                                            label="工單"
                                            fullWidth
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                        <Button className={classes.button} variant="contained" color="primary">搜尋</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Paper>
                                <Typography>狀態: 待熱處理</Typography>
                                <Divider />
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>站別</TableCell>
                                            <TableCell>起始時間</TableCell>
                                            <TableCell>結束時間</TableCell>


                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.station}</TableCell>
                                                <TableCell>{row.start_time}</TableCell>
                                                <TableCell>{row.end_time}</TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                    </Grid>

            

            </React.Fragment>

        );
    }
}

export default withStyles(style, { withTheme: true })(Statistics);