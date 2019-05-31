import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
// import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing.unit * 2,
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing.unit * 3,
  //     width: 'auto',
  //   },
  // },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Nav extends React.Component {
  state = {
    anchorEl: null,
    anchorEl2: null,
    mobileMoreAnchorEl: null,
  };


  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <MenuItem onClick={this.handleMenuClose}>
          Brainstorm
        </MenuItem>
      </Link>
      <Link to="/aboutus" style={{ textDecoration: 'none' }}>
        <MenuItem onClick={this.handleMenuClose}>
          About Us
        </MenuItem>
      </Link>
      <Link to="/instructions" style={{ textDecoration: 'none' }}>
        <MenuItem onClick={this.handleMenuClose}>
          Instructions
        </MenuItem>
      </Link>
      </Menu >
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <i class="material-icons">save</i>
          </IconButton>
          <p>Save</p>
        </MenuItem>
        <Link to="/brainstorms" style={{ textDecoration: 'none' }}>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <i class="material-icons">flash_on</i>
            </IconButton>
            <p>My Brainstorms</p>
          </MenuItem>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <i class="material-icons">account_circle</i>
            </IconButton>
            <p>Log Out</p>
          </MenuItem>
        </Link>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
            </Menu>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <i class="fas fa-brain"></i> BrainStorm
            </Typography>
            {/* <div className={classes.grow} /> */}
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                {/* <MoreIcon /> */}
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                {/* <MoreIcon /> */}
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
