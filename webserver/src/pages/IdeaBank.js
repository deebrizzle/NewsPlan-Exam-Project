import NavBar from "../components/NavBar";
import ChooseDate from "../components/CalendarPopup"
import BasicSelect from "../components/BasicSelect"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Table from "../components/IdeaTable"
import { IdeaWrapper } from "./IdeaBank.styles";
import SearchInput from "../components/SearchBar";

function IdeaBank() {
    return (
        <>
        <NavBar/>
        <IdeaWrapper>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <h1>Idea Bank</h1>
            <ChooseDate />
            <div style={{display: 'flex'}}>
              <BasicSelect />
              <SearchInput/>
            </div>
            <Table></Table>
          </LocalizationProvider>
          </IdeaWrapper>
        </>
          );
  }
  export default IdeaBank