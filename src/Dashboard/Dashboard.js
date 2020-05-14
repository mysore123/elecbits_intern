import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems} from './ListItems';
import Chart from '../BottomfourBoxes/Chart';
import Doughnut from '../BottomfourBoxes/Doughnutchart';
import Orders from '../BottomfourBoxes/Orders';
import Totrev from '../TopfourBoxes/data';
import '../welcome.css';
import Conv from '../TopfourBoxes/conversion';
import Sales from '../TopfourBoxes/sales';
import Visits from '../TopfourBoxes/visits'
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Stackedchart from '../BottomfourBoxes/StackedChart';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Anirudh's website
      </Link>
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 320,
  },
  newheight:{
    height:95,
  },
  chartheight:{
    height:370
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const newHeightPaper=clsx(classes.paper,classes.newheight);
  const chartHeightPaper=clsx(classes.paper,classes.chartheight);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h4" color="inherit" noWrap className="title">
            Sachait
          </Typography>
           
          <IconButton color="inherit">
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
            <div >
                <Typography variant="p" className="dash">Dashboard</Typography>
                <Typography variant="subtitle2" className="welcome">Welcome to Ubold Admin Panel!</Typography>
            </div>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>

            {/*top four cards*/}
            
            <Grid item xs={12} md={8} lg={3}>
              <Paper className={newHeightPaper}>
                <Grid container spacing={4}>
                    <Grid item>
                        <AttachMoneySharpIcon color="primary" fontSize="large"/>
                    </Grid>
                    <Grid item >
                        <Totrev/>
                    </Grid>
                </Grid>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={8} lg={3}>
              <Paper className={newHeightPaper}>
              <Grid container spacing={4}>
                    <Grid item>
                        <ShoppingCartIcon color="secondary" fontSize="large"/>
                    </Grid>
                    <Grid item >
                        <Sales/>
                    </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={3}>
              <Paper className={newHeightPaper}>
              <Grid container spacing={4}>
                    <Grid item>
                        <EqualizerIcon color="primary" fontSize="large"/>
                    </Grid>
                    <Grid item spacing={2}>
                        <Conv/>
                    </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={3}>
              <Paper className={newHeightPaper}>
              <Grid container spacing={4}>
                    <Grid item>
                        <VisibilityIcon color="secondary" fontSize="large"/>
                    </Grid>
                    <Grid item>
                        <Visits/>
                    </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Total revenue*/}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Typography color="primary">Total Revenue</Typography>
                <Typography className="tdysales">Todays Sales: $75</Typography>
                <Typography component="p" variant="h5" className="sales">80</Typography>    
                < Doughnut/>
              </Paper>
            </Grid>


             {/* Chart */}
             <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            

               {/* Recent Orders */}
            <Grid item xs={7} lg={12} >
              <Paper className={chartHeightPaper}>
                <Orders />
              </Paper>
            </Grid>


              {/*StackedChart*/}

              <Grid item xs={4} md={8} lg={6.2}>
              <Paper className={chartHeightPaper}>
                <Stackedchart />
              </Paper>
            </Grid>

           

          </Grid>   {/*End of main grid*/}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}