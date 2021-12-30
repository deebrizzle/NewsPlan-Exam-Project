import React, {useState} from "react";
import ContentScheduleEmployees from "../ContentSchedule/ContentScheduleEmployees";
import ContentScheduleArticles from "../ContentSchedule/ContentScheduleArticles";
import Box from "@mui/material/Box";
import { MyTabs, MyTab } from "./TabBar.styles";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="h2">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          p: 0.8,
          width: 220,
          border: "1px solid #94AFBC",
          borderRadius: 2,
          marginLeft: "40.4%",
        }}
        centered
      >
        <MyTabs
          value={value}
          onChange={handleChange}
          centered
        >
          <MyTab label="Employees" />
          <MyTab label="Articles" />
        </MyTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ContentScheduleEmployees />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentScheduleArticles />
      </TabPanel>
    </Box>
  );
}

export default TabBar;