import {Statistics} from "../../../statistics/models/statistics";

export interface StatisticsState {
    statistics?: Statistics | undefined,
    isLoading: boolean,
    error: string
}


export enum StatisticsActionEnum {
    SET_STATISTICS = 'SET_STATISTICS',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface StatisticsSetStatisticsAction {
    type: StatisticsActionEnum.SET_STATISTICS;
    payload: Statistics
}

export interface StatisticsSetErrorAction {
    type: StatisticsActionEnum.SET_ERROR;
    payload: string
}

export interface StatisticsSetIsLoadingAction {
    type: StatisticsActionEnum.SET_IS_LOADING;
    payload: boolean
}


export type StatisticsAction =
    StatisticsSetStatisticsAction
    | StatisticsSetErrorAction
    | StatisticsSetIsLoadingAction;