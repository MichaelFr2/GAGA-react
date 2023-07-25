import React, { useState } from 'react'
import VacanciesSearchHeader from '../../entities/headers/VacanciesSearchHeader/VacanciesSearchHeader'
import SearchField from '../../shared/components/SearchField/SearchField'
import VacanciesFilter from '../../entities/VacanciesFilter/VacanciesFilter'
import useStyles from './VacancyFeed.styles'
import VacancyTemplate from '../../entities/VacancyTemplate/VacancyTemplate'
import VacanciesList from '../../features/VacanciesList/VacanciesList'

const VacancyFeed = () => {
  const classes = useStyles();
  const [occupationFilter, setOccupationFilter] = useState('no-matter');
  const [countryFilter, setCountryFilter] = useState('no-matter');
  const [specializationFilter, setSpecializationFilter] = useState('no-matter');

  return (
    <>
      <div className={classes.header}>
        <VacanciesSearchHeader />
        <SearchField />
        <VacanciesFilter setOccupationFilter={setOccupationFilter} setCountryFilter={setCountryFilter} setSpecializationFilter={setSpecializationFilter} />
        <VacanciesList occupationFilter={occupationFilter} countryFilter={countryFilter} specializationFilter={specializationFilter}/>
      </div>
      <div className={classes.body}>
      </div>
    </>
  )
}

export default VacancyFeed
