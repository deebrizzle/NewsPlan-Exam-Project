import NavBar from "../components/Navigation/NavBar"
import { PageWrapper } from "./PageMargin.styles"
import { useParams, useNavigate, NavLink} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import { getIdea } from "../database/Ideas";
import Loading from "../components/Loading";
import {Stack, Grid} from '@mui/material';
import {StandardButton, ReturnButton } from '../components/Button.styles'
import { DescriptionInput, HeadlineInput } from '../components/InputFields';
import { SelectDate } from '../components/SelectFields/SelectDate'
import { SelectSection } from '../components/SelectFields/SelectSection'
import { SelectSource } from '../components/SelectFields/SelectSource'
import { SelectStatus } from '../components/SelectFields/SelectStatus'
import { SelectPhotographer } from '../components/SelectFields/SelectPhotographer'
import CommentTable from "../components/Tables/CommentTable";
import GridSpacer from "../components/Gridspacer";
import { getArticleById } from "../database/Articles";

function Article() {

    const { id } = useParams();
    const [idea, setIdea] = useState();
    const [article, setArticle] = useState();
    const navigate = useNavigate()

    function handleSave() {}

    useEffect(() => {
        getIdea(id).then((idea) => setIdea(idea))
        getArticleById(id).then((article) => setArticle(article))
    }, [id]);

    console.log(idea)
    console.log(article)

    if (idea === undefined || article === undefined) {
        return (
            <>
            <NavBar/>
            <PageWrapper>
                <Loading/>
            </PageWrapper>
        </>
        )
    }  
    
    return (
        <>
         <NavBar/>
         <PageWrapper>
            <h1> Article Overview </h1>
            <Grid container spacing={3}>
                {/* INPUT FIELDS */}
                <Grid item xs={6}> <HeadlineInput/></Grid>
                <Grid item xs={6}> <SelectSource label="Responsible"/></Grid>
                <Grid item xs={6}> <SelectSection/></Grid>
                <Grid item xs={6}> <SelectSource label="Assistant"/></Grid>
                <GridSpacer spacing={6}/>
                <Grid item xs={6}> <SelectPhotographer label="Photographer"/></Grid>
                <Grid item xs={12}><DescriptionInput/></Grid>
                <Grid item xs={12}><CommentTable articleId={id}/></Grid>
                {/* BUTTONS */}
                <Grid item xs={6}>
                    <Stack spacing={3} direction ="row" justifyContent ="flex-start">
                        {/* TODO use navigate.goBack() instead of NavLink */}
                        <ReturnButton component={NavLink} to="/ideabank">Return</ReturnButton>
                        <SelectStatus/> 
                        <SelectDate label="Deadline"/>
                    </Stack>
                </Grid>
                <Grid item xs={6} >
                    <Stack spacing={3} direction ="row" justifyContent ="flex-end">
                        <ReturnButton onClick={handleSave}>Plan</ReturnButton>
                        <StandardButton onClick={handleSave}>Save</StandardButton>
                    </Stack>
                </Grid>
            </Grid>
         </PageWrapper>
        </>
    )
}

export default Article;