import {StatisticsActionCreator} from "./statistics/action-creators";
import {StatisticsFilterActionCreator} from "./statistics-filter/action-creators";

export const allActionCreators = {
    ...StatisticsActionCreator,
    ...StatisticsFilterActionCreator
}