import React from "react";
import ContentScheduleCalendarView from "./ContentScheduleCalendarView";
import ContentScheduleListView from "./ContentScheduleListView";
import Box from "@mui/material/Box";
import { MyTabs, MyTab } from "./TabBar.styles";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{p:0.8, width:250, border:"1px solid #94AFBC", borderRadius: 2, marginLeft: "40%",}} centered>
        <MyTabs value={value} onChange={handleChange} centered textColor="primary">
          <MyTab label="Calendar View" />
          <MyTab label="List View" />
        </MyTabs>
      </Box>
      <TabPanel value={value} index={0}>
          <ContentScheduleCalendarView />
      </TabPanel>
      <TabPanel value={value} index={1}>
          <ContentScheduleListView />
      </TabPanel>
    </Box>
  );
}

export default TabBar;
