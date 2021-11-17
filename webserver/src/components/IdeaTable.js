import { DataGrid } from '@mui/x-data-grid';
import { Fragment } from 'react';

const rows= [
    { id: 1, col1: '01-04-21', col2: 'KSM', col3: 'Mette F.: Deleted message' , col4: 'The Mink Comission waited for text messages..'},
    { id: 2, col1: '01-04-21', col2: 'MIH', col3: 'Local election' , col4: 'Do you know who youd like to wote for?' },
    { id: 3, col1: '01-04-21', col2: 'MIH', col3: 'Climate changes in weather' , col4: 'How the weather in DK changes the climate..' },
    { id: 4, col1: '01-04-21', col2: 'GTL', col3: 'The premier Leauge status' , col4: 'Live updates, scores, etc...' },
    { id: 5, col1: '01-04-21', col2: 'KSM', col3: 'COVID-19: what now?' , col4: 'How has Corona affected peoples daily lives..' },
    { id: 6, col1: '01-04-21', col2: 'GTL', col3: 'Olympic winter games 2022' , col4: 'Oive updates from Bejing, follow schedule, rep..' }
  ];

  const columns = [
  { field: 'col1', headerName: 'Lifetime', width: 150 },
  { field: 'col2', headerName: 'Source', width: 150 },
  { field: 'col3', headerName: 'Idea', width: 250 },
  { field: 'col4', headerName: 'Description', width: 350 },
];

export default function Table() {
    return (
      <Fragment style={{ height: 500, width: '100%' }}>
          <Fragment style={{ display: 'flex', height: '100%' }}>
              <Fragment style={{ flexGrow: 2 }}>
              <DataGrid 
                rows={rows} 
                columns={columns}
                pageSize={7}
                />
              </Fragment>
          </Fragment>
      </Fragment>
    );
  }