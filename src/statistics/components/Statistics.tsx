import {CircularProgress} from '@mui/material';
import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {StatisticsActionCreator} from "../../store/reducers/statistics/action-creators";
import {StatisticTypes} from "../models/statistic-types";
import DataGridWrap from "./DataGridWrap";
import StatisticsFilter from "./StatisticsFilter";
import {StatisticsFilterActionCreator} from "../../store/reducers/statistics-filter/action-creators";

const Statistics: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(StatisticsFilterActionCreator.loadDefaultFilterForm())
        dispatch(StatisticsActionCreator.loadStatistics({statistics_type: StatisticTypes.Country}))
    }, [dispatch]);

    const {statistics, isLoading, error} = useTypesSelector(state => state.statistics)
    const {defaultLoadFilterForm} = useTypesSelector(state => state.statisticsFilter)

    if (isLoading) {
        return <CircularProgress/>
    }
    if (error) {
        return <>error</>
    }

    return (
        <div>
            <div>
                {defaultLoadFilterForm && <StatisticsFilter defaultLoadFilterForm={defaultLoadFilterForm}/>}
            </div>
            <div>
                {statistics && <DataGridWrap statistics={statistics}/>}
            </div>
        </div>
    );
};

export default Statistics;