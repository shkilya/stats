import {
    StatisticsActionEnum,
    StatisticsSetErrorAction,
    StatisticsSetIsLoadingAction,
    StatisticsSetStatisticsAction
} from "./types";
import {Statistics} from "../../../statistics/models/statistics";
import {AppDispatch} from '../../index';
import httpClient from "../../../utils/http";
import {StatisticTypes} from "../../../statistics/models/statistic-types";


export const StatisticsActionCreator = {
    setStatistics: (statistics: Statistics): StatisticsSetStatisticsAction => ({
        type: StatisticsActionEnum.SET_STATISTICS,
        payload: statistics
    }),
    setIsLoading: (isLoading: boolean): StatisticsSetIsLoadingAction => ({
        type: StatisticsActionEnum.SET_IS_LOADING,
        payload: isLoading
    }),
    setError: (error: string): StatisticsSetErrorAction => ({
        type: StatisticsActionEnum.SET_ERROR,
        payload: error
    }),
    loadStatistics: (params:{}) => async (dispatch: AppDispatch) => {
        try {
            dispatch(StatisticsActionCreator.setIsLoading(true));
            const {data} = await httpClient.get<Statistics>('/api/statistics', {params});

            dispatch(StatisticsActionCreator.setStatistics(data));
        } catch (e) {
            dispatch(
                StatisticsActionCreator.setError('Something bad happened'),
            );
        }
        dispatch(StatisticsActionCreator.setIsLoading(false));
    }
}
