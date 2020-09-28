
import React from 'react';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import style from './style'

import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function TabPanel(props) {
    const { value, index, classes, children,page } = props;
    console.log(page)
    
    // console.log("I am calling")
    // console.log(children)
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}

        >
            {value === index && (
               <TableContainer component={Paper}>
               <Table className={classes.table} size="small" aria-label="a dense table">
                   <TableHead>
                       <TableRow>
                           <TableCell>序號</TableCell>
                           <TableCell align="right">品號</TableCell>
                           <TableCell align="right">客戶品號</TableCell>
                           <TableCell align="right">烤漆顏色</TableCell>
                           <TableCell align="right">訂單量</TableCell>
                           <TableCell align="right">派工量</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {children.map((row) =>  (
                           <TableRow key={row.index}>
                               <TableCell component="th" scope="row">
                                   {row.index}
                               </TableCell>
                               <TableCell align="right">{row.product_number}</TableCell>
                               <TableCell align="right">{row.vendor_number}</TableCell>
                               <TableCell align="right">{row.color_number}</TableCell>
                               <TableCell align="right">{row.order_quantity}</TableCell>
                               <TableCell align="right">{row.dispatch_quantity}</TableCell>
                           </TableRow>
                       ))}
                       
                   </TableBody>
               </Table>
           </TableContainer>
            )}
        </div>
    );

}

export default withStyles(style, { withTheme: true })(TabPanel);
