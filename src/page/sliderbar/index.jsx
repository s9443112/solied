import React from 'react';
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BuildIcon from '@material-ui/icons/Build';
import LayersIcon from '@material-ui/icons/Layers';
import HomeIcon from '@material-ui/icons/Home';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import HistoryIcon from '@material-ui/icons/History';
import style from '../../style'
import * as request from '../../request/index'

class Sliderbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      route: 1,
      info: {
        "function_name": [],
        "function_path": []
      }
    }
  }

  async componentDidMount() {
    let info = await request.info()
    // console.log(info)
    this.setState({ info: info })
  }



  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;



    const { function_name, function_path, function_icon } = this.state.info;

    let ListBuffer = []
    for (let i in function_name) {
      // console.log(function_name[i])
      // console.log(function_path[i])
      ListBuffer.push(
        <ListItem key={i} button component={Link} to={`${process.env.PUBLIC_URL}${function_path[i]}`}>
          <ListItemIcon>
            {/* <HomeIcon style={{ color: 'white' }} /> */}
            {function_icon[i] === 'DashboardIcon' ? <DashboardIcon style={{ color: 'white' }} /> :
              function_icon[i] === 'ShowChartIcon' ? <ShowChartIcon style={{ color: 'white' }} /> :
              function_icon[i] === 'HistoryIcon' ? <HistoryIcon style={{ color: 'white' }} /> :
              <LayersIcon style={{ color: 'white' }} />  }
          </ListItemIcon>
          <ListItemText primary={function_name[i]} />
        </ListItem>
      )
    }
    const mainListItems = (
      <div style={{ color: 'white' }}>
        {ListBuffer}
      </div>
    )


    // const mainListItems = (
    //   <div style={{ color: 'white' }}>
    //     <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/home`}>
    //       <ListItemIcon>
    //         <HomeIcon style={{ color: 'white' }} />
    //       </ListItemIcon>
    //       <ListItemText primary="Home" />
    //     </ListItem>
    //     <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/dashboard`} >
    //       <ListItemIcon>
    //         <DashboardIcon style={{ color: 'white' }} />
    //       </ListItemIcon>
    //       <ListItemText primary="戰情看板" />
    //     </ListItem>
    //     <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/statistics`}>
    //       <ListItemIcon>
    //         <ShowChartIcon style={{ color: 'white' }} />
    //       </ListItemIcon>
    //       <ListItemText primary="數據統計" />
    //     </ListItem>
    //     <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/history`} >
    //       <ListItemIcon>
    //         <HistoryIcon style={{ color: 'white' }} />
    //       </ListItemIcon>
    //       <ListItemText primary="歷史檢視" />
    //     </ListItem>
    //     <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/login`} >
    //       <ListItemIcon>
    //         <BuildIcon style={{ color: 'white' }} />
    //       </ListItemIcon>
    //       <ListItemText primary="登入" />
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemIcon>
    //         <LayersIcon style={{ color: 'white' }} />
    //       </ListItemIcon>
    //       <ListItemText primary="設定" />
    //     </ListItem>
    //   </div>
    // );
    // console.log(this.props.children)
    // console.log(this.props)
    return (
      <div className={classes.root} >
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)} >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>{this.props.value}</Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon} >

            <Grid container>
              <Grid item xs={12}>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/logo/logo.png`} alt="logo" style={{ width: 100 }}></img>
                  <p style={{ color: 'white' }}>智慧生產追蹤系統</p>
                </div>
              </Grid>
            </Grid>
            <IconButton onClick={this.handleDrawerClose} style={{ color: 'white' }}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>

        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {this.props.children}
          </Container>
        </main>
      </div>

    );
  }

}




export default withStyles(style, { withTheme: true })(Sliderbar);

