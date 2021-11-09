import styled from "styled-components";
import * as React from 'react';
import {Stack, Box, Button, Typography, Modal, Grid, TextField, MenuItem, FormControl, FormHelperText, Select, InputLabel} from '@mui/material';
import { LoginButton, SaveButton, CancelButton } from "../components/Button.styles";
import { useForm } from "react-hook-form";
import ReactHookFormSelect from "../components/ReactHookFormSelect.js";
import CalendarPopup from "../components/CalendarPopup";

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

const employees = [
    'ACL',
    'EGL',
    'KSM',
    'MLI',
    'NGP',
    'PO',
    'YRL'
]

const sections = [
    'Financial',
    'Sports',
    'Politics',
    'Vacation'
]

const visibilities = [
    'Only myself',
    'Chief Editor',
    'Section Staff',
    'Everyone'
]

const articles = [
    'Amount of votes from low income counties set new records',
    'How to vote as a foreigner in Denmark'
]


export default function IdeaModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSave = () => console.log("Save the idea into the database. Reset all states to empty")

    const [source, setSource] = React.useState('');
    const [section, setSection] = React.useState('');
    const [visibility, setVisibility] = React.useState('');

    const handleVisibility = (event) => setVisibility(event.target.value);
    const handleSection = (event) => setSection(event.target.value);
    const handleSource = (event) => setSource(event.target.value);
    const handleArticle = (event) => console.log("Router redirects to article page? Read-only list?");

    return (
      <div>
        <LoginButton onClick={handleOpen}>Open Idea</LoginButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={IdeaBoxStyle} >
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center" m={2}> Create Idea {props.idea} </Typography>
                <Grid container spacing={2}>
                    
                    <Grid item xs={6}>
                        <TextField id="idea-box" label="Idea" placeholder="Name of the idea" defaultValue={props.idea} fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <CalendarPopup ></CalendarPopup>
                    </Grid>
                    <Grid item xs={6}>
                        {/* CREATE THESE AS A REUSABLE COMPONENT WITH REACT-HOOK-FORM OR PROPS? */}
                        <FormControl fullWidth >
                            <InputLabel>Section</InputLabel>
                            <Select
                            labelId="sections-select"
                            id="sections-select"
                            value= {section}
                            label="sections"
                            onChange={handleSection}
                            >
                                {sections.map((name) => (
                                    <MenuItem key ={name} value={name}> {name} </MenuItem>
                                ))}
                            </Select>
                        </FormControl>                    </Grid>
                    <Grid item xs={6}>
                        {/* SHOULD THIS BE A NEW MODAL OR OTHER VIEW, SO IT DOESN'T INDICATE YOU HAVE TO CHOOSE SOMETHING? */}
                        <FormControl fullWidth >
                                <InputLabel>Visibility</InputLabel>
                                <Select
                                labelId="visibility-select"
                                id="visibility-select"
                                value= {visibility}
                                label="visibility"
                                onChange={handleVisibility}
                                >
                                    {/* ADD MAXWIDTH FOR LONG ARTICLE NAMES
                                
                                     */}
                                    {visibilities.map((name) => (
                                        <MenuItem key ={name} value={name}> {name} </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    <Grid item xs={6}>

                        <FormControl fullWidth >
                            <InputLabel>Source</InputLabel>
                            <Select
                            labelId="source-select"
                            id="source-select"
                            value= {source}
                            label="Source"
                            onChange={handleSource}
                            >
                                {employees.map((name) => (
                                    <MenuItem key ={name} value={name}> {name} </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth >
                                <InputLabel>Articles</InputLabel>
                                <Select
                                labelId="article-select"
                                id="article-select"
                                value= "article"
                                label="article"
                                onChange={handleArticle}
                                >
                                    {articles.map((name) => (
                                        <MenuItem key ={name} value={name}> {name} </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="description-textbox" label="Description" multiline rows={4} placeholder="Max 100 characters" defaultvalue={props.description} fullWidth />
                    </Grid>

                    <Grid item xs={8}>
                        <CancelButton onClick={handleClose}>Cancel</CancelButton>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={2} direction ="row" justifyContent ="flex-end">
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