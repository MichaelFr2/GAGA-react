import React from 'react'
import VacanciesSearchHeader from '../../entities/headers/VacanciesSearchHeader/VacanciesSearchHeader'
import SearchField from '../../shared/components/SearchField/SearchField'
import VacanciesFilter from '../../entities/VacanciesFilter/VacanciesFilter'
import useStyles from './VacancySearch.styles'
const VacancySearch = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <VacanciesSearchHeader />
        <SearchField />
        <VacanciesFilter />
      </div>
    </>
  )
}

export default VacancySearch