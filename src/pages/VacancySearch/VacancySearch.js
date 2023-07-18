import React from 'react'
import VacanciesSearchHeader from '../../entities/headers/VacanciesSearchHeader/VacanciesSearchHeader'
import SearchField from '../../shared/components/SearchField/SearchField'
import VacanciesFilter from '../../entities/VacanciesFilter/VacanciesFilter'

const VacancySearch = () => {
  return (
    <>
        <VacanciesSearchHeader />
        <SearchField />
        <VacanciesFilter />
    </>
  )
}

export default VacancySearch