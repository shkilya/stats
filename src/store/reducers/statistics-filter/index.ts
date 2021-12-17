import {StatisticsFilterFormState, StatisticsFilterAction, StatisticsFilterActionEnum} from "./types";
import {StatisticsFilterForm} from "../../../statistics/models/default-load-form";

const initialState: StatisticsFilterFormState = {
    defaultLoadFilterForm: undefined,
    updatedFilterForm: {} as StatisticsFilterForm,
    error: "",
    isLoading: false,
}

const reducer = (state = initialState, action: StatisticsFilterAction): StatisticsFilterFormState => {
    switch (action.type) {
        case StatisticsFilterActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case StatisticsFilterActionEnum.SET_UPDATED_FILTER_FORM:
            return {...state, updatedFilterForm: action.payload}
        case StatisticsFilterActionEnum.SET_DEFAULT_FORM_PARAM:
            return {...state, defaultLoadFilterForm: action.payload}
        case StatisticsFilterActionEnum.SET_ERROR:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state;
    }
}

export default reducer