import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

interface DrawerItem {
  text: string;
  icon?: React.ReactNode;
}

interface TemporaryDrawerProps {
  buttonLabel?: string;
  primaryItems?: DrawerItem[];
  secondaryItems?: DrawerItem[];
  drawerWidth?: number;
}

export const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({
  buttonLabel = 'Open drawer',
  primaryItems = [
    { text: 'Inbox', icon: <InboxIcon /> },
    { text: 'Starred', icon: <MailIcon /> },
    { text: 'Send email', icon: <InboxIcon /> },
    { text: 'Drafts', icon: <MailIcon /> },
  ],
  secondaryItems = [
    { text: 'All mail', icon: <InboxIcon /> },
    { text: 'Trash', icon: <MailIcon /> },
    { text: 'Spam', icon: <InboxIcon /> },
  ],
  drawerWidth = 250,
}) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: drawerWidth }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {primaryItems.map(({ text, icon }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon ?? (index % 2 === 0 ? <InboxIcon /> : <MailIcon />)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryItems.map(({ text, icon }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon ?? (index % 2 === 0 ? <InboxIcon /> : <MailIcon />)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>{buttonLabel}</Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
