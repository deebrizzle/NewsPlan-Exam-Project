import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import CommentsOnArticles from "../utils/CommentsOnArticles";
import { LoginButton } from "./Button.styles";
import { logOut } from "./logOut";
import { NavLink } from "react-router-dom";

export default function UserDrawer(props) {
  const { drawerOpen, setDrawerOpen } = props;
  const comments = CommentsOnArticles();
  let newComments = comments.length === 0 ? "No new comments on articles" : "New comments on articles:";

  return (
    <div>
      <Fragment>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 400 }}>
            <List>
              <Typography variant="h4" component="h2" align="center">
                Notifications
              </Typography>
            </List>
            <Divider />
            <List>
              <Box m={2}>
                <Typography variant="h5" component="h2">
                  {newComments}
                </Typography>
              </Box>
              {comments.map((comment, i) => (
                <Box m={2} key={i}>
                  <Fragment>
                    <Typography variant="h6" component="h2">
                      {comment.headline}
                    </Typography>
                    {comment.updatedAt}: {comment.message}
                  </Fragment>
                </Box>
              ))}
              <Divider />
              <Box m={2}>
                <LoginButton
                  component={NavLink}
                  variant="outlined"
                  onClick={() => logOut()}
                  to="/"
                >
                  Logout
                </LoginButton>
              </Box>
            </List>
          </Box>
        </Drawer>
      </Fragment>
    </div>
  );
}
