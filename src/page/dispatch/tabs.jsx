import React from 'react'
import {
    Container,
    Grid,
    Paper,
    Tabs,
    Tab,
    AppBar,
    Box,
    Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core';

import style from './style'
import Dispatcher from './index'
import DispatchList from './list'


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

class DispatchTabs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            tabs: undefined,
            tabspanel: undefined
        }
    }
    componentDidMount() {
        this.props.handleChangeValue(this.props.title)
    }

    handleChange = (event, newValue) => {
        this.setState({ value: undefined });
        this.setState({ value: newValue });
        // this.componentDidMount()
    };

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                        <Tab label="工單簽核" {...a11yProps(0)} />
                        <Tab label="工單派遣" {...a11yProps(1)} />

                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.value} index={0}>
                    <DispatchList handleChangeValue={this.props.handleChangeValue} title={"工單簽核"} />
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    <Dispatcher handleChangeValue={this.props.handleChangeValue} title={"工單派遣"} />
                </TabPanel>

            </div>
        );
    }
}

export default withStyles(style, { withTheme: true })(DispatchTabs)