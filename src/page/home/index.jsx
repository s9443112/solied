
import React from 'react';
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import * as request from '../../request/index'
import style from '../../style'

class Home extends React.Component {


    render() {
        const {classes} = this.props
        // console.log(fixedHeightPaper)
        return (
            <Container maxWidth="lg" className={classes.container}>
                <h1>asd</h1>


            </Container>
        );

    }


}


export default withStyles(style, { withTheme: true })(Home);


