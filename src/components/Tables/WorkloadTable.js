import React, {useEffect, useState} from "react";
import { StyledDataGrid } from "./IdeaTable.styles";
import { createUserWorkloadArray } from "../../database/Articles";
import Loading from "../Loading";
import { StyledAlertIcon } from "./ArticleTable.styles"
import clsx from 'clsx';
import colors from '../../colors'
import {ColoredWorkloadsBox} from './WorkloadTable.styles'
import { Box } from "@mui/system";

export default function WorkloadTable({allUsers, date}) {

    const users = allUsers;
    
    //TODO Fix predefined sort to show RED/YELLOW/GREEN cells.
    const [workloads, setWorkloads] = useState();    
    const [sortModel, setSortModel] = useState([
        {
          field: 'workload',
          sort: 'desc',
        },
      ]);
    
    
    useEffect(() => {
        setWorkloads(createUserWorkloadArray(users, date))
      }, []);

    const columns = [
        { field: "name", headerName: "Employee", minWidth: 100  },
        { field: "section", headerName: "Section", minWidth: 125  },
        { field: "photographer", headerName: "Photographer", minWidth: 150,
            renderCell: (params) => {
                if (params.row.photographer === false) {
                    return "No"
                }
                else return "Yes"
            }
        },
        { field: "workload", headerName: "Workload", minWidth: 125, 
            cellClassName: (params) => 
            clsx('workload', {
                green: params.value <= 1,
                yellow: params.value > 1 && params.value < 4,
                red: params.value > 3
            })
        },
        {
            field: 'notification',
            headerName: '',
            description: 'This column has a value getter and is not sortable.',
            width: 75,
            renderCell: (params) => {
              if (params.row.workload >= 4) {
                return <StyledAlertIcon/>
              }
            }
          }    
        ]

    function handleRowClick(e) {}

    if (workloads === undefined) {
        return <Loading/>
    }

    //TODO Make into styled component somehow (see ColoredWorkloadsBox in WorkloadTable.styles.js)
    else return(
        <Box
            sx={{
                height: 500,
                '& .workload.green': {
                backgroundColor: `${colors.Finished}`,
                },
                '& .workload.yellow': {
                backgroundColor: `${colors.Accepted}`,
                },
                '& .workload.red': {
                backgroundColor: `${colors.Cancelled}`
                },
            }}>
            <StyledDataGrid 
            getRowId={(row) => row.objectId} 
            rows={workloads} 
            columns={columns} 
            rowsPerPageOptions={[10]} 
            sortModel = {sortModel}
            onSortModelChange={(model) => setSortModel(model)}
            pageSize={10} 
            onRowClick={(e) => handleRowClick(e)}/>
    </Box>

    );
}
 