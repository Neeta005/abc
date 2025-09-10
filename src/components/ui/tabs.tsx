import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  tabs: { label: string; content: React.ReactNode }[];
}

export const BasicTabs: React.FC<BasicTabsProps> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              background: 'linear-gradient(90deg, #FF3B47 0%, #FF6A1A 100%)',
              height: 3,
              borderRadius: 2,
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                color: value === index ? 'transparent' : '#fff',
                background: value === index ? 'linear-gradient(90deg, #FF3B47 0%, #FF6A1A 100%)' : 'none',
                WebkitBackgroundClip: value === index ? 'text' : undefined,
                WebkitTextFillColor: value === index ? 'transparent' : undefined,
                fontWeight: value === index ? 600 : 500,
                fontSize: 18,
                textTransform: 'none',
                minWidth: 0,
                px: 3,
                mx: 1,
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};
