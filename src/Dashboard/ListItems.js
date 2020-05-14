import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CreateIcon from '@material-ui/icons/Create';
import AppsIcon from '@material-ui/icons/Apps';

export const mainListItems = (
  <div>
    <ListItem button>
    <ListItemIcon>
        <HomeIcon/>
    </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="UI Kits" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiObjectsIcon/>
      </ListItemIcon>
      <ListItemText primary="Components" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AppsIcon/>
      </ListItemIcon>
      <ListItemText primary="Icons" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="Forms" />
    </ListItem>
  </div>
);
