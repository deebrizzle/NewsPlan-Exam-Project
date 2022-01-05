import React, {useContext} from 'react';
import {Stack, Box, Typography, Modal, Grid} from '@mui/material';
import {SaveButton, CancelButton, DeleteButton } from "./Button.styles";
import { IdeaBoxStyle } from './Idea.styles';
import { SelectArticles } from './SelectFields/SelectArticles';
import { SelectDate } from './SelectFields/SelectDate';
import { SelectVisibilities } from './SelectFields/SelectVisibilities';
import { SelectSource } from './SelectFields/SelectSource';
import { SelectSection } from './SelectFields/SelectSection';
import { DescriptionInput, IdeaInput } from './InputFields';
import {ModalContext} from "./ModalContext"
import { uploadIdeaToDatabase} from "../database/Ideas";
import {uploadIdeaToState} from "./updateStates"
import AlertDialog from "./AlertDialog"

export default function IdeaModal({setOpen, open}) {
  const { listOfIdeas, setListOfIdeas, ideaSourceObject, sectionObject, ideaId, idea, description, visibility, date, section, ideaSource} = useContext(ModalContext);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  async function handleDelete(){
    setAlertOpen(true);
  }

  async function handleSave() {
    const ideaInputFields = [idea, description, visibility, section, ideaSource];
    for (const element of ideaInputFields) {
        if (element === null || element === ""){
          alert("Please fill out every field to save your idea.");
          setOpen(true)
          return false;
        }
      }
      await uploadIdeaToDatabase(idea, description, visibility, date, ideaSourceObject, sectionObject, ideaId);
      uploadIdeaToState(idea, description, visibility, section, ideaSource, ideaId, date, listOfIdeas, setListOfIdeas)
      handleClose()
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
                    <Grid item xs={6}><SelectDate/></Grid>
                    <Grid item xs={6}><SelectSection/></Grid>
                    <Grid item xs={6}><SelectVisibilities/></Grid>
                    <Grid item xs={6}><SelectSource/></Grid>
                    <Grid item xs={6}><SelectArticles/></Grid>
                    <Grid item xs={12}><DescriptionInput/></Grid>
                    {/* BUTTONS */}
                    <Grid item xs={1}>
                      <Stack spacing={3} direction ="row" justifyContent ="flex-start">
                        <CancelButton onClick={handleClose}>Cancel</CancelButton>
                        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                        <AlertDialog alertOpen={alertOpen} setAlertOpen={setAlertOpen} setOpen={setOpen}></AlertDialog>
                      </Stack>
                    </Grid>
                    <Grid item xs={11} >
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
