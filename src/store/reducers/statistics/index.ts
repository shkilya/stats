import {StatisticsAction, StatisticsActionEnum, StatisticsState} from "./types";
import {Statistics} from "../../../statistics/models/statistics";


const initialState: StatisticsState = {
    statistics: {} as Statistics,
    error: "",
    isLoading: false,
}

export default (state = initialState, action: StatisticsAction): StatisticsState => {
    switch (action.type) {
        case StatisticsActionEnum.SET_IS_LOADING:
            return {...state, isLoading: true}
        case StatisticsActionEnum.SET_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case StatisticsActionEnum.SET_STATISTICS:
            return {...state, isLoading: false, statistics: action.payload}
        default:
            return state;
    }
}