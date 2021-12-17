import {Autocomplete, Button, FormControl, TextField} from '@mui/material';
import React, {FC, FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {StatisticsActionCreator} from "../../store/reducers/statistics/action-creators";
import {StatisticTypes} from "../models/statistic-types";
import {Country, DefaultLoadFilterForm, StatisticsFilterForm} from "../models/default-load-form";
import {StatisticsFilterActionCreator} from "../../store/reducers/statistics-filter/action-creators";
import {useTypesSelector} from "../../hooks/useTypesSelector";

interface DefaultLoadFilterFormProps {
    defaultLoadFilterForm: DefaultLoadFilterForm
}

const StatisticsFilter: FC<DefaultLoadFilterFormProps> = ({defaultLoadFilterForm}) => {

    const {updatedFilterForm} = useTypesSelector(state => state.statisticsFilter)

    const {countries} = defaultLoadFilterForm
    const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
    const [statisticsFilterForm, setStatisticsFilterForm] = useState<StatisticsFilterForm>(updatedFilterForm);
    console.log(statisticsFilterForm);


    const dispatch = useDispatch();


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const countryIds = selectedCountries.map(country => country.id)
        dispatch(StatisticsFilterActionCreator.setUpdatedFilterForm(statisticsFilterForm))
        dispatch(
            StatisticsActionCreator.loadStatistics({
                statistics_type: StatisticTypes.Country,
                country_ids: countryIds
            })
        )
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{m: 1, width: 200}}>
                    <Autocomplete
                        disablePortal
                        multiple
                        onChange={(event: any, newValue: any) => {
                            setSelectedCountries(newValue)
                            setStatisticsFilterForm((state: StatisticsFilterForm) => {
                                return {...state, selectedCountries: newValue}
                            })
                        }}
                        value={updatedFilterForm.selectedCountries}
                        options={countries}
                        id="combo-box-demo"
                        getOptionLabel={option => option.name}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Countries"
                                placeholder="Search"
                            />
                        )}
                    />
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Send
                </Button>
            </form>
        </div>
    );
};

export default StatisticsFilter;