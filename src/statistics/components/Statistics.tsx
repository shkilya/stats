import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {StatisticsActionCreator} from "../../store/reducers/statistics/action-creators";
import {StatisticTypes} from "../models/statistic-types";

const Statistics: FC = () => {

    const dispatch = useDispatch();

    const {statistics,isLoading,error}= useTypesSelector(state=>state.statistics)
    console.log(statistics);


    useEffect(() => {
        dispatch(StatisticsActionCreator.loadStatistics({statistics_type: StatisticTypes.Country}))
    }, []);

    return (
        <div>
        </div>
    );
};

export default Statistics;