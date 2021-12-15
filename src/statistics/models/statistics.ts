import {CountryStatisticsData} from "./country-statistics-data";

export interface Statistics{
    data:Array<CountryStatisticsData>,
    columns:[],
    groupBy:string
}