import { useParams, NavLink} from "react-router-dom";
import React, {useEffect, useState, useContext} from 'react'
import {Stack, Grid} from '@mui/material';
import NavBar from "../components/Navigation/NavBar"
import { PageWrapper } from "./PageMargin.styles"
import Loading from "../components/Loading";
import {FieldContext} from "../components/FieldContext"
import {StandardButton, ReturnButton } from '../components/Button.styles'
import {DescriptionInput} from "../components/InputFields/DescriptionInput"
import {HeadlineInput} from "../components/InputFields/HeadlineInput"
import { SelectDate } from '../components/SelectFields/SelectDate'
import { SelectSection } from '../components/SelectFields/SelectSection'
import { SelectSource } from '../components/SelectFields/SelectSource'
import { SelectStatus } from '../components/SelectFields/SelectStatus'
import { SelectPhotographer } from '../components/SelectFields/SelectPhotographer'
import { SelectAssistant } from '../components/SelectFields/SelectAssistant'
import { SelectWorkload } from '../components/SelectFields/SelectWorkload'
import CommentTable from "../components/Tables/CommentTable";
import { getArticleById } from "../database/articles";
import { getIdea } from "../database/ideas";
import { uploadArticleToDatabase } from "../database/articles";

export default function Article() {

    const { headline, assistant, photographer, ideaSource, ideaSourceObject, workload, status, date} = useContext(FieldContext);

    const { id } = useParams();
    const [idea, setIdea] = useState();
    const [article, setArticle] = useState();

    //TODO Missing implementation of fetching Photographer and Assistant objects correctly. When planning an article with these fields filled, it fails to upload to the database.
    //TODO Status needs to be converted from a string into a number, why the uploadArticleToDatabase is currently hardcoded to '1' to prove that it works. 
    async function handlePlan() {
        const articleInputFields = [idea, ideaSource, headline, workload, ideaSourceObject, status, date];
        for (const element of articleInputFields) {
            if (element === null || element === ""){
              alert("Please fill out every field to save your idea.");
              return false;
            }
          }
        await uploadArticleToDatabase(idea[0], headline, ideaSourceObject, photographer, assistant, 1, status, date);
    }

    useEffect(() => {
        getIdea(id).then((idea) => setIdea(idea))
        getArticleById(id).then((article) => setArticle(article))
    }, [id]);

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
            <Grid container spacing={3}>
                {/* INPUT FIELDS */}
                <Grid item xs={6}> <HeadlineInput/></Grid>
                <Grid item xs={6}> <SelectSource label="Responsible"/></Grid>
                <Grid item xs={6}> <SelectSection/></Grid>
                <Grid item xs={6}> <SelectAssistant label="Assistant"/></Grid>
                <Grid item xs={6}> <SelectWorkload /></Grid>
                <Grid item xs={6}> <SelectPhotographer label="Photographer"/></Grid>
                <Grid item xs={12}><DescriptionInput/></Grid>
                <Grid item xs={12}><CommentTable articleId={id}/></Grid>
                {/* BUTTONS */}
                <Grid item xs={6}>
                    <Stack spacing={3} direction ="row" justifyContent ="flex-start">
                        <ReturnButton component={NavLink} to="/ideabank">Return</ReturnButton>
                        <SelectStatus/> 
                        <SelectDate label="Deadline"/>
                    </Stack>
                </Grid>
                <Grid item xs={6} >
                    <Stack spacing={3} direction ="row" justifyContent ="flex-end">
                        <ReturnButton onClick={handlePlan}>Plan</ReturnButton>
                        <StandardButton disabled>Save</StandardButton>
                    </Stack>
                </Grid>
            </Grid>
         </PageWrapper>
        </>
    )
}