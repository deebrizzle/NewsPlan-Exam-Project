import NavBar from "../components/Navigation/NavBar";
import { PageWrapper } from "./PageMargin.styles";

export default function Calendar() {
    return(
        <>
        <NavBar />
        <PageWrapper>
          <h1>This page should have displayed the Calendar</h1>
          <a href="https://www.figma.com/file/zXgh3dP8smOBHPw03p1cFP/Hi-Fi-Prototype?node-id=473%3A22344">
            Click here to see it in Figma
          </a>
        </PageWrapper>
      </>
    )
}