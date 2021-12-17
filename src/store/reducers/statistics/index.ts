import {StatisticsAction, StatisticsActionEnum, StatisticsState} from "./types";


const initialState: StatisticsState = {
    statistics: undefined,
    error: "",
    isLoading: false,
}

const reducer = (state = initialState, action: StatisticsAction): StatisticsState => {
    switch (action.type) {
        case StatisticsActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case StatisticsActionEnum.SET_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case StatisticsActionEnum.SET_STATISTICS:
            return {...state, isLoading: false, statistics: action.payload}
        default:
            return state;
    }
}
export default reducer