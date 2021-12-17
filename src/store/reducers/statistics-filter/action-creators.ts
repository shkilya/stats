import {AppDispatch} from '../../index';
import httpClient from "../../../utils/http";
import {DefaultLoadFilterForm, StatisticsFilterForm} from "../../../statistics/models/default-load-form";
import {
    StatisticsFilterActionEnum,
    StatisticsFilterSetErrorAction,
    StatisticsFilterSetIsLoadingAction,
    StatisticsSetDefaultFormParamAction,
    StatisticsSetUpdateFilterFormAction
} from "./types";


export const StatisticsFilterActionCreator = {
    setDefaultFilterForm: (defaultLoadFilterForm: DefaultLoadFilterForm): StatisticsSetDefaultFormParamAction => ({
        type: StatisticsFilterActionEnum.SET_DEFAULT_FORM_PARAM,
        payload: defaultLoadFilterForm
    }),
    setUpdatedFilterForm: (statisticsFilterForm: StatisticsFilterForm): StatisticsSetUpdateFilterFormAction => ({
        type: StatisticsFilterActionEnum.SET_UPDATED_FILTER_FORM,
        payload: statisticsFilterForm
    }),
    setIsLoading: (isLoading: boolean): StatisticsFilterSetIsLoadingAction => ({
        type: StatisticsFilterActionEnum.SET_IS_LOADING,
        payload: isLoading
    }),
    setError: (error: string): StatisticsFilterSetErrorAction => ({
        type: StatisticsFilterActionEnum.SET_ERROR,
        payload: error
    }),
    loadDefaultFilterForm: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(StatisticsFilterActionCreator.setIsLoading(true));
            const {data} = await httpClient.get<DefaultLoadFilterForm>('/api/statistics-filter-form');

            dispatch(StatisticsFilterActionCreator.setDefaultFilterForm(data));
        } catch (e) {
            dispatch(StatisticsFilterActionCreator.setError('Something bad happened'),);
        }
        dispatch(StatisticsFilterActionCreator.setIsLoading(false));
    },
}
