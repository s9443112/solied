import React from 'react'
import { withStyles } from "@material-ui/core/styles";

import { Grid, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import style from './style'


class DetailItem extends React.Component {

    render() {

        const { classes } = this.props;

        // console.log(classes)
        return (

            <Grid item xs={12} md={4} lg={4} >
                <Card className={classes.root} variant="outlined">

                    <CardContent>
                        <Grid container>

                            <Grid item xs={11} md={11} lg={11}>
                                <Typography variant="h4" component="h2" style={{ textAlign: 'center', paddingLeft: '40px' }}>{this.props.title}</Typography>
                            </Grid>
                            <Grid item xs={1} md={1} lg={1}>
                                {this.props.power === true ?
                                    <img src={`${process.env.PUBLIC_URL}/Green_Light_Icon.svg`} alt="logo" style={{ width: 40 }}></img> :
                                    <img src={`${process.env.PUBLIC_URL}/Red_Light_Icon.svg`} alt="logo" style={{ width: 40 }}></img>
                                }
                                {/* <PowerSettingsNewIcon style={{ color: this.props.power === true ? "green" : "red", fontSize: '35px' }} /> */}
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} style={{ textAlign: 'left' }}>
                                <Typography variant="h5" component="p" style={{ display: 'inline' }}>
                                    {this.props.order === undefined ? "-" : this.props.order}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} style={{ textAlign: 'right' }}>
                                <Typography variant="h5" component="p" style={{ display: 'inline' }}>
                                    {this.props.machine === undefined ? "-" : this.props.machine}
                                </Typography>
                            </Grid>

                        </Grid>
                        <Typography variant="h5" component="p">
                            人員: {this.props.person === undefined ? "-" : this.props.person}
                        </Typography>

                    </CardContent>
                    <CardActions className={classes.action}>
                        <Typography variant="h3" component="p" >
                            {this.props.amount === undefined ? "-" : this.props.amount} / {this.props.target === undefined ? "-" : this.props.target}
                        </Typography>
                    </CardActions>

                </Card>
            </Grid>
        );
    }
}

export default withStyles(style, { withTheme: true })(DetailItem);