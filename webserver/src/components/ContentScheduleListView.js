import { Grid } from "@mui/material"
import { SelectSection, SelectSource } from "./SelectFields"
import ArticleTable from "./ArticleTable"
import CalendarPopup from "./CalendarPopup"

//TODO: figure out how to query by only date without the timestamp
async function getFinishedArticles(date, section) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("responsible")
    query.equalTo("status", "F");
    query.include("idea")
    query.equalTo("section", section)
    query.equalTo("publishDate", date)
    return await query.find();
  }

  async function getUnfinishedArticles(date, section) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("responsible")
    query.notEqualTo("status", "F");
    query.include("idea")
    query.equalTo("section", section)
    query.equalTo("publishDate", date)
    return await query.find();
  }

  async function getIdeas(section) {
    const Ideas = Parse.Object.extend("Ideas");
    const query = new Parse.Query(Ideas);
    query.equalTo("section", section)
    return await query.find();
  }

export default function ContentScheduleListView() {
    const [finishedArticles, setFinishedArticles] = React.useState();
    const [unfinishedArticles, setUnfinishedArticles] = React.useState();
    const [date, setDate] = React.useState(new Date(2021, 11, 17, 0, 0, 0, 0));
    const [section, setSection] = React.useState("Foreign affairs");

    const handleCallbackDate = (Date) =>{
      setDate(Date)
      console.log(Date)
    }

    const handleCallBackSelection = (selectedSection) => {
      setSection(selectedSection)
      console.log(selectedSection)
    }

    //TODO: add error handling
    useEffect(() => {

      setDate(date)

      setSection(section)

      getIdeas(section)
      
      getFinishedArticles(date, section).then((article) => {
        setFinishedArticles(article);

      getUnfinishedArticles(date, section).then((article) => {
        setUnfinishedArticles(article)

          console.log("it loads")
          console.log(date)
        })
      });
    }, [date, section]);

  
    if (finishedArticles === undefined) {
      return <p>Loading...</p>;
    } else 

    return(
        <>
        <Grid container spacing={2}>
        {/* First Line */}
            <Grid item xs={2}> <SelectSource/> </Grid>
            <Grid item xs={2}> <SelectSection/> </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={2} justifyContent="left"> <CalendarPopup/> </Grid>
            {/* Second line: headers */}
            <Grid item xs={6}><h6>Finished Articles</h6></Grid>
            <Grid item xs={6}> <h6>Unfinished Articles</h6></Grid>
            {/* Third line: tables */}
<<<<<<< HEAD
            <Grid item xs={6}> <ArticleTable/> </Grid>
            <Grid item xs={6}> <ArticleTable/> </Grid>
=======
            <Grid item xs={6}> <ArticleTable articles={finishedArticles}/> </Grid>
            <Grid item xs={6}> <ArticleTable articles={unfinishedArticles}/> </Grid>
            <Grid></Grid>
>>>>>>> 5cebbf64a196a4fef3aecaec095069aa190a3b1c
        </Grid>
        </>
    )
}