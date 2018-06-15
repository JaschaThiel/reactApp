import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SidebarDrawer from './SidebarDrawer';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <SidebarDrawer />
      </div>
    );
  }
}

export default Header;
