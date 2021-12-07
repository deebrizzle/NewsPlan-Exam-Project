import * as React from 'react';
import {Stack, Box, Typography, Modal, Grid,} from '@mui/material';
import {SaveButton, CancelButton } from "../components/Button.styles";
import { IdeaBoxStyle } from './Idea.styles';
import CalendarPopup from "../components/CalendarPopup";
import { SelectArticles, SelectSection, SelectVisibilities, SelectSource } from "./SelectFields";
import { DescriptionInput, IdeaInput } from './InputFields';
import {ModalContext} from "./ModalContext"
import { uploadIdeaToDatabase, deleteIdeaFromDatabase } from "../database/Ideas";
import { v4 as uuidv4 } from 'uuid';
import {uploadIdeaToState, deleteIdeaFromState} from "./UpdateStates"

export default function IdeaModal() {
  const { listOfIdeas, setListOfIdeas, ideaSourceObject, sectionObject, ideaId, open, handleClose, handleCallBack, idea, description, visibility, date, section, ideaSource } = React.useContext(ModalContext);

  async function handleDelete(){
    await deleteIdeaFromDatabase(ideaId)
    deleteIdeaFromState(ideaId, listOfIdeas, setListOfIdeas)
    handleClose();
  }

  async function handleSave() {
    var IdeaInputFields = [{idea, description, visibility, date, section, ideaSource, ideaId}];
    if (IdeaInputFields.every((ideaInput) => ideaInput === null || ideaInput === "")) {
      alert("Please fill out every field to save your idea.");
    } else {
      let id = uuidv4();
      await uploadIdeaToDatabase(idea, description, visibility, date, ideaSourceObject, sectionObject, ideaId);
      uploadIdeaToState(listOfIdeas, IdeaInputFields, id, idea, description, visibility, section, ideaSource, ideaId, date, setListOfIdeas)
      handleClose();
    }
  }
  
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={IdeaBoxStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center" m={2}> Create Idea </Typography>
                <Grid container spacing={3}>
                    {/* INPUT FIELDS */}
                    <Grid item xs={6}><IdeaInput /></Grid>
                    <Grid item xs={6}><CalendarPopup handleCallbackDate={handleCallBack} /></Grid>
                    <Grid item xs={6}><SelectSection handleCallBackSelection={handleCallBack}/></Grid>
                    <Grid item xs={6}><SelectVisibilities handleCallBackSelection={handleCallBack}/></Grid>
                    <Grid item xs={6}><SelectSource handleCallBackSelection={handleCallBack}/></Grid>
                    <Grid item xs={6}><SelectArticles handleCallBackSelection={handleCallBack}/></Grid>
                    <Grid item xs={12}><DescriptionInput/></Grid>
                    {/* BUTTONS */}
                    <Grid item xs={4}><CancelButton onClick={handleClose}>Cancel</CancelButton></Grid>
                    <Grid item xs={4}><CancelButton onClick={handleDelete}>Delete</CancelButton></Grid>
                    <Grid item xs={4}>
                        <Stack spacing={3} direction ="row" justifyContent ="flex-end">
                            <CancelButton disabled>Convert to article</CancelButton>
                            <SaveButton onClick={handleSave}>Save</SaveButton>
                        </Stack>
                    </Grid>
                </Grid>
          </Box>
        </Modal>
      </div>
    );
}  
