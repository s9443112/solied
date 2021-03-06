import { withStyles } from '@material-ui/core';
import React from 'react'
import style from './style'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import * as request from '../../request/index'
import Alert from './alert'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account: undefined,
            password: undefined,
            result: undefined
        }
    }

    handleClose = () => {
        this.setState({ result: undefined })
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state)

        let result = await request.login({ 'account': this.state.account, 'password': this.state.password })
        console.log(result)
        if (result.type === 0) {
            setTimeout(function () { window.location.href = '/soleil/dashboard' }, 1500);
        }
        let info = await request.info()
        console.log(info)

        this.setState({ result: <Alert open={true} data={result} handleClose={this.handleClose} /> })

    }

    render() {
        const { classes } = this.props
        // console.log("here")
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        日鉅管理後台
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit} >
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="account"
                                    label="帳號"
                                    name="account"
                                    autoComplete="account"
                                    onInput={e => this.setState({ account: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="密碼"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onInput={e => this.setState({ password: e.target.value })}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            登入
          </Button>

                    </form>
                </div>
                {this.state.result}


            </Container>
        );
    }
}

export default withStyles(style, { withTheme: true })(Login)