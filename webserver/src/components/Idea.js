import * as React from 'react';
import {Stack, Box, Typography, Modal, Grid,} from '@mui/material';
import { LoginButton, SaveButton, CancelButton } from "../components/Button.styles";
import CalendarPopup from "../components/CalendarPopup";
import { SelectArticles, SelectSection, SelectVisibilities, SelectSource } from "./SelectFields";
import {DescriptionInput, IdeaInput} from './InputFields';

const IdeaBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  outline: 'none',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function IdeaModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }
    const handleSave = () => console.log("Save the idea into the database. Reset all states to empty")

    return (
      <div>
        <LoginButton onClick={handleOpen}>Add Idea</LoginButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={IdeaBoxStyle} >
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center" m={2}> Create Idea {props.idea} </Typography>
                <Grid container spacing={3}>
                    {/* INPUT FIELDS */}
                    <Grid item xs={6}><IdeaInput/></Grid>
                    <Grid item xs={6}><CalendarPopup /></Grid>
                    <Grid item xs={6}><SelectSection/></Grid>
                    <Grid item xs={6}><SelectVisibilities/></Grid>
                    <Grid item xs={6}><SelectSource/></Grid>
                    <Grid item xs={6}><SelectArticles/></Grid>
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