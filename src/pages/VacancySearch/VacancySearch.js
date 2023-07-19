import React from 'react'
import VacanciesSearchHeader from '../../entities/headers/VacanciesSearchHeader/VacanciesSearchHeader'
import SearchField from '../../shared/components/SearchField/SearchField'
import VacanciesFilter from '../../entities/VacanciesFilter/VacanciesFilter'
import useStyles from './VacancySearch.styles'
import VacancyTemplate from '../../entities/VacancyTemplate/VacancyTemplate'
const VacancySearch = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <VacanciesSearchHeader />
        <SearchField />
        <VacanciesFilter />
      </div>
      <div className={classes.body}>
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
        <VacancyTemplate />
      </div>
    </>
  )
}

export default VacancySearch