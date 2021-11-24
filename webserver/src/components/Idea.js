import * as React from 'react';
import {Stack, Box, Typography, Modal, Grid,} from '@mui/material';
import { StandardButton, SaveButton, CancelButton } from "../components/Button.styles";
import { IdeaBoxStyle } from './Idea.styles';
import CalendarPopup from "../components/CalendarPopup";
import { SelectArticles, SelectSection, SelectVisibilities, SelectSource } from "./SelectFields";
import { DescriptionInput, IdeaInput } from './InputFields';
import { uploadIdea } from '../database/Ideas'

//TODO Figure out how to handle states from select and inputfields. Redux maybe?
//TODO Create similar component for handling opening already created ideas from idea bank.

export default function IdeaModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }

    const [newIdea, setIdea] = React.useState(
      { ideaName: '', description: '', visibility: '', expirationDate: '', section: '', ideaSource: ''}
    )

    // TODO All handle callback functions in IdeaModal, Idea and IdeaBank - can we refactor into one place?
    const handleCallBack = () => {}

    async function handleSave() {
    
      if (Object.values(newIdea).every(x => x === null || x === '')) {
        alert("Please fill out every field to save your idea.");
      }

      else {
        await uploadIdea(newIdea);
        handleClose();
      }
    }
    

    return (
      <div>
        <StandardButton onClick={handleOpen}>Add Idea</StandardButton>
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
                    <Grid item xs={8}><CancelButton onClick={handleClose}>Cancel</CancelButton></Grid>
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