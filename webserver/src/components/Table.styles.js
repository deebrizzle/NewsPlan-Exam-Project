import styled from "styled-components";
import { TableContainer, TableCell} from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import colors from "./colors";

export const StyledTableContainer = styled(TableContainer)`
    border-radius: 5px;
    height: 400px;
    width: 100%;
    overflow: initial;
`

export const StyledTableLink = styled(Link)`

    text-decoration: none;
    color: inherit;

`

export const StyledEditIcon = styled(EditIcon)`
    width: 20%; 
    float: right;
    html-color: #415B68;
    font-size: small;
`

export const StyledTableCell = styled(TableCell)`
    background: ${colors.P2BabyBlueLight}
`
