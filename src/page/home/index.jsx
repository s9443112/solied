
import React from 'react';
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import * as request from '../../request/index'
import style from '../../style'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            raw_data: undefined,
            history: undefined
        }
    }

    do_something = async () =>{
        // console.log("i ma callin")
        let raw_data = await request.get_raw_data()
        let history = await request.get_history()
        
        raw_data = "[" + raw_data.json_data.substring(0, raw_data.json_data.length - 1) + "]"
        // console.log(raw_data)
        raw_data = JSON.parse(raw_data)
        this.setState({
            raw_data: undefined,
            history: undefined
        })
        this.setState({
            raw_data: raw_data,
            history: history
        })
    }

    async componentDidMount() {
        this.props.handleChangeValue(this.props.title)
        // this.do_something()
        setInterval((() =>
            this.do_something()
        ), 5000);


    }

    render() {
        const { classes } = this.props;
        let fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        let fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeightCus);
        let fixedHeightPaper3 = clsx(classes.paper, classes.fixedHeightCus2);
        // console.log(fixedHeightPaper)
        return (
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} lg={4} container spacing={3}>

                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={fixedHeightPaper2}>
                                {/* {this.state.history !== undefined && <Status data={this.state.history[0]} />} */}
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={fixedHeightPaper3}>
                                {/* {this.state.history !== undefined && <AlignItemsList data={this.state.history} />} */}
                            </Paper>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} md={8} lg={8} container spacing={3}>

                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={fixedHeightPaper}>
                                {/* {this.state.raw_data !== undefined && <Current raw_data={this.state.raw_data} />} */}
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={fixedHeightPaper}>
                                {/* {this.state.raw_data !== undefined && <Vibrate raw_data={this.state.raw_data} />} */}

                            </Paper>
                        </Grid>

                    </Grid>


                </Grid>
                
            </Container>
        );

    }


}


export default withStyles(style, { withTheme: true })(Home);


