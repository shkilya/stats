import React, {FC} from 'react';
import {Statistics} from "../models/statistics";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";

type StatisticsProps={
    statistics:Statistics
}

const DataGridWrap:FC<StatisticsProps> = ({statistics}) => {

    const rows: GridRowsProp = statistics.data;

    const columns: GridColDef[] = statistics.columns.map(item=>{
        return { field: item, headerName: item, width: 150 };
    })

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
};

export default DataGridWrap;