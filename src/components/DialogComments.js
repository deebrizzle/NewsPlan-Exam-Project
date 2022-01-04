import { SimpleDialog } from "./SimpleDialog";
import {Fragment, useState} from "react"
import {LoginButton} from "./Button.styles"

export default function DialogComments() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <LoginButton variant="outlined" onClick={handleClickOpen}>
        Comments on your articles
      </LoginButton>
      <SimpleDialog open={open} onClose={handleClose} />
    </Fragment>
  );
}
