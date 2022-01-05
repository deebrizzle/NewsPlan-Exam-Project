import React, {useContext} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {ModalContext} from "./ModalContext"
import {deleteIdeaFromDatabaseREST } from "../database/Ideas";
import {deleteIdeaFromState} from "./updateStates"
import {CancelButton, DeleteButton } from "./Button.styles";

export default function AlertDialog(props) {
  const { listOfIdeas, setListOfIdeas, ideaId} = useContext(ModalContext);
  const {alertOpen, setAlertOpen, setOpen} = props;

  async function handleClose(){
    await deleteIdeaFromDatabaseREST(ideaId)
    deleteIdeaFromState(ideaId, listOfIdeas, setListOfIdeas)
    setAlertOpen(false);
    setOpen(false);
  };

  async function handleCancel(){
    setAlertOpen(false);
  };

  return (
    <>
      <Dialog
        open={alertOpen}
        onClose={handleCancel}
      >
        <DialogTitle>
          {"Are you sure you want to delete this idea?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          This action cannot be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
          <DeleteButton onClick={handleClose} autoFocus>
            Delete
          </DeleteButton>
        </DialogActions>
      </Dialog>
    </>
  );
}