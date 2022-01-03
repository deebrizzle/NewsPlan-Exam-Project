import styled from "styled-components";
import { TableContainer, TableCell} from "@mui/material";
import colors from "../../colors";
import ErrorIcon from "@mui/icons-material/Error";

export const StyledTableContainer = styled(TableContainer)`
    border-radius: 5px;
    height: 400px;
    width: 100%;
    overflow: initial;
`

export const StyledAlertIcon = styled(ErrorIcon)`
    width: 40%; 
    float: right;
    color: ${colors.P1DarkPetroleum};
`

export const StyledTableCell = styled(TableCell)`
    background-color: ${colors.P1GreyLightBlue};

`
