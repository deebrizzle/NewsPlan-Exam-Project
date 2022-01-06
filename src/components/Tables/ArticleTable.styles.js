import styled from "styled-components";
import { TableContainer, TableCell} from "@mui/material";
import colors from "../../colors";
import ErrorIcon from "@mui/icons-material/Error";

export const StyledAlertIcon = styled(ErrorIcon)`
    width: 40%; 
    float: right;
    color: ${colors.P1DarkPetroleum};
`
