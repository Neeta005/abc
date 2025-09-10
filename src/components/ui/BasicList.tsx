import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

interface ListItemData {
  key: string;
  text: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disablePadding?: boolean;
  button?: boolean;
}

interface BasicListProps {
  primaryItems: ListItemData[];
  secondaryItems?: ListItemData[];
  maxWidth?: number | string;
}

export const BasicList: React.FC<BasicListProps> = ({
  primaryItems,
  secondaryItems = [],
  maxWidth = 360,
}) => {
  return (
    <Box sx={{ width: '100%', maxWidth, bgcolor: 'background.paper' }}>
      <nav aria-label="primary mailbox folders">
        <List>
          {primaryItems.map(({ key, text, icon, href, onClick, disablePadding = true, button = true }) => (
            <ListItem key={key} disablePadding={disablePadding}>
              <ListItemButton component={href ? 'a' : 'button'} href={href} onClick={onClick} disabled={!button}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      {secondaryItems.length > 0 && (
        <>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              {secondaryItems.map(({ key, text, icon, href, onClick, disablePadding = true, button = true }) => (
                <ListItem key={key} disablePadding={disablePadding}>
                  <ListItemButton component={href ? 'a' : 'button'} href={href} onClick={onClick} disabled={!button}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </>
      )}
    </Box>
  );
};
