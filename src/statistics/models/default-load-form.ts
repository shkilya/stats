export interface Country {
    id: number,
    name: string
}

export interface StatisticsFilterForm {
    selectedCountries: Array<Country>
}

export interface DefaultLoadFilterForm{
    countries: Array<Country>
}

