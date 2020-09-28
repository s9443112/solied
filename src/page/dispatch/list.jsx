import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import style from './acc_style'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as request from '../../request/index'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TabPanel from './panel'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小時 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



class DispatchList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            html: undefined,
            value: 0,
            tabs: undefined,
            tabspanel: undefined
        }
    }

    handleChange = (event, newValue) => {
        this.setState({ value: undefined });
        this.setState({ value: newValue });
        this.componentDidMount()
    };

    async componentDidMount() {
        this.props.handleChangeValue(this.props.title)
        let result = await request.get_order()
        const { classes } = this.props
        console.log(result)
        let html = [<Accordion key={'first'} disabled={true} style={{ backgroundColor: '#FFFFFF' }}>
            <AccordionSummary

                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ opacity:1 }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={1} md={1} lg={1}>
                        <Typography className={classes.heading} >
                            派工號
                        </Typography>
                    </Grid>
                    <Grid item xs={1} md={1} lg={1}>
                        <Typography className={classes.heading} >
                            派工單
                    </Typography>
                    </Grid>
                    <Grid item xs={1} md={1} lg={1}>
                        <Typography className={classes.heading}>
                            品名
                    </Typography>
                    </Grid>

                    <Grid item xs={1} md={1} lg={1}>
                        <Typography className={classes.heading}>
                            製表時間
                    </Typography>
                    </Grid>
                    <Grid item xs={1} md={1} lg={1}>
                        <Typography className={classes.heading}>
                            開始時間
                    </Typography>
                    </Grid>
                    <Grid item xs={1} md={1} lg={1}>
                        <Typography className={classes.heading} >
                            出貨時間
                    </Typography>
                    </Grid>
                    <Grid item xs={1} md={1} lg={1}>
                        <Typography className={classes.heading} >
                            機種
                    </Typography>
                    </Grid>
                </Grid>

            </AccordionSummary>
        </Accordion>
        ]

        for (let i in result) {

            let order_content = await request.get_order_content_id({ data: result[i]["_id"] })
            let page = []
            let page_content = []
            // console.log(order_content)
            for (let j in order_content) {
                
                if (page.indexOf(order_content[j]['page']) === -1) {
                    page.push(order_content[j]['page'])
                    page_content.push({"page":order_content[j]['page'],'data':[]})
                }
                
                let index = page_content.findIndex(x => x.page === order_content[j]['page'])

                // console.log(j)
                page_content[index]['data'].push(order_content[j])
            }
            // console.log(page_content)
            // page_content.map((rower, index) => {
            //     console.log(rower)
            // })

            html.push(

                <Accordion key={i}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"

                    >
                        <Grid container spacing={3}>
                            <Grid item xs={1} md={1} lg={1}>
                                <Typography className={classes.heading}>
                                    {result[i]["_id"]}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} md={1} lg={1}>
                                <Typography className={classes.heading} >
                                    {result[i]["table_type"] === 'A' ? 'A式派工單' : 'B式派工單'}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} md={1} lg={1}>
                                <Typography className={classes.heading} >
                                    {result[i]["product_name"]}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} md={1} lg={1}>
                                <Typography className={classes.heading} >
                                    {new Date(result[i]["tabulation"]).Format("yyyy-MM-dd")}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} md={1} lg={1}>
                                <Typography className={classes.heading} >
                                    {new Date(result[i]["start_date"]).Format("yyyy-MM-dd")}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} md={1} lg={1}>
                                <Typography className={classes.heading} >
                                    {new Date(result[i]["shipment"]).Format("yyyy-MM-dd")}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} md={1} lg={1}>
                                <Typography className={classes.heading} >
                                    {result[i]["product_model"]}
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>

                        <AppBar position="static">
                            <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                                {page_content.map((rower, index) => (
                                    <Tab key={parseInt(index)} label={`Page${rower.page}`} {...a11yProps(parseInt(index))} />
                                ))}
                            </Tabs>

                            {/* {this.state.value !== undefined && this.state.tabspanel} */}
                            {page_content.map((rower, index) => (
                                <TabPanel value={this.state.value} index={index} key={index} page={rower.page}>{rower.data}</TabPanel>
                                // <TableContainer component={Paper}>
                                //     <Table className={classes.table} size="small" aria-label="a dense table">
                                //         <TableHead>
                                //             <TableRow>
                                //                 <TableCell>序號</TableCell>
                                //                 <TableCell align="right">品號</TableCell>
                                //                 <TableCell align="right">客戶品號</TableCell>
                                //                 <TableCell align="right">烤漆顏色</TableCell>
                                //                 <TableCell align="right">訂單量</TableCell>
                                //                 <TableCell align="right">派工量</TableCell>
                                //             </TableRow>
                                //         </TableHead>
                                //         <TableBody>
                                //             {rower.map((row) => (
                                //                 <TableRow key={row.index}>
                                //                     <TableCell component="th" scope="row">
                                //                         {row.index}
                                //                     </TableCell>
                                //                     <TableCell align="right">{row.product_number}</TableCell>
                                //                     <TableCell align="right">{row.vendor_number}</TableCell>
                                //                     <TableCell align="right">{row.color_number}</TableCell>
                                //                     <TableCell align="right">{row.order_quantity}</TableCell>
                                //                     <TableCell align="right">{row.dispatch_quantity}</TableCell>
                                //                 </TableRow>
                                //             ))}
                                //         </TableBody>
                                //     </Table>
                                // </TableContainer>
                            ))}
                        </AppBar>

                    </AccordionDetails>
                </Accordion>

            )
        }
        this.setState({ html: html })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                {this.state.html}

            </div>

        );
    }
}

export default withStyles(style, { withTheme: true })(DispatchList);