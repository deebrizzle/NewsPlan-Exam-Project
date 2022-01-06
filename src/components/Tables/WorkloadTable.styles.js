import styled from "styled-components";
import { Box } from "@mui/material";
import colors from "../../colors";

export const ColoredWorkloadsBox = styled(Box)`
    height: 500px;

    .workload.green: {
        backgroundColor: ${colors.Finished}
    },

    .workload.yellow: {
        backgroundColor: ${colors.Accepted}
    }

    .workload.red: {
        backgroundColor: ${colors.Cancelled}
    }
    
`
