import {DefaultLoadFilterForm, StatisticsFilterForm} from "../../../statistics/models/default-load-form";

export interface StatisticsFilterFormState {
    defaultLoadFilterForm?: DefaultLoadFilterForm | undefined,
    updatedFilterForm: StatisticsFilterForm,
    isLoading: boolean,
    error: string
}


export enum StatisticsFilterActionEnum {
    SET_DEFAULT_FORM_PARAM = 'SET_DEFAULT_FORM_PARAM',
    SET_UPDATED_FILTER_FORM = 'SET_UPDATED_FILTER_FORM',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR'
}


export interface StatisticsSetDefaultFormParamAction {
    type: StatisticsFilterActionEnum.SET_DEFAULT_FORM_PARAM;
    payload: DefaultLoadFilterForm
}

export interface StatisticsSetUpdateFilterFormAction {
    type: StatisticsFilterActionEnum.SET_UPDATED_FILTER_FORM;
    payload: StatisticsFilterForm
}

export interface StatisticsFilterSetErrorAction {
    type: StatisticsFilterActionEnum.SET_ERROR;
    payload: string
}

export interface StatisticsFilterSetIsLoadingAction {
    type: StatisticsFilterActionEnum.SET_IS_LOADING;
    payload: boolean
}


export type StatisticsFilterAction =
    StatisticsSetDefaultFormParamAction
    | StatisticsFilterSetErrorAction
    | StatisticsFilterSetIsLoadingAction
    | StatisticsSetUpdateFilterFormAction;