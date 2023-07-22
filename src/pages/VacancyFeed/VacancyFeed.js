import React from 'react'
import VacanciesSearchHeader from '../../entities/headers/VacanciesSearchHeader/VacanciesSearchHeader'
import SearchField from '../../shared/components/SearchField/SearchField'
import VacanciesFilter from '../../entities/VacanciesFilter/VacanciesFilter'
import useStyles from './VacancyFeed.styles'
import VacancyTemplate from '../../entities/VacancyTemplate/VacancyTemplate'
import VacanciesList from '../../features/VacanciesList/VacanciesList'
const VacancyFeed = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <VacanciesSearchHeader />
        <SearchField />
        <VacanciesFilter />
        <VacanciesList />
      </div>
      <div className={classes.body}>
      </div>
    </>
  )
}

export default VacancyFeed