import Dialog from "@mui/material/Dialog";
import CommentsOnArticles from "./CommentsOnArticles";
import { Fragment } from "react";
import { Typography, Box } from "@mui/material";

export function SimpleDialog(props) {
  const { onClose, open } = props;
  const comments = CommentsOnArticles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box m={2}>
        <Typography variant="h5" component="h2" align="center">
          Comments on your articles
        </Typography>
        {comments.map((comment, i) => (
          <Box m={2} key={i}>
          <Fragment>
            <Typography variant="h6" component="h2">
              {comment.headline}
            </Typography>
            {comment.createdAt}: {comment.message}
          </Fragment>
          </Box>
        ))}
      </Box>
    </Dialog>
  );
}
