import React, { useState } from 'react'
import VacanciesSearchHeader from '../../entities/headers/VacanciesSearchHeader/VacanciesSearchHeader'
import SearchField from '../../shared/components/SearchField/SearchField'
import VacanciesFilter from '../../entities/VacanciesFilter/VacanciesFilter'
import useStyles from './VacancyFeed.styles'
import VacancyTemplate from '../../entities/VacancyTemplate/VacancyTemplate'
import VacanciesList from '../../features/VacanciesList/VacanciesList'
import { useLocation } from 'react-router-dom'

const VacancyFeed = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const [occupationFilter, setOccupationFilter] = useState(state?.occupationFilter || 'no-matter');
  const [countryFilter, setCountryFilter] = useState(state?.countryFilter || 'no-matter');
  const [specializationFilter, setSpecializationFilter] = useState(state?.specializationFilter || 'no-matter');
  const [gradeFilter, setGradeFilter] = useState(state?.gradeFilter || []); // Add this line

  return (
    <>
      <div className={classes.header}>
        <VacanciesSearchHeader />
        <SearchField />
        <VacanciesFilter 
          setOccupationFilter={setOccupationFilter} 
          setCountryFilter={setCountryFilter} 
          setSpecializationFilter={setSpecializationFilter}
          setGradeFilter={setGradeFilter} // Add this line
          initialFilters={{ occupationFilter, countryFilter, specializationFilter, gradeFilter }} // Add gradeFilter here
        />
        <VacanciesList 
          occupationFilter={occupationFilter} 
          countryFilter={countryFilter} 
          specializationFilter={specializationFilter}
          gradeFilter={gradeFilter} // And here
        />
      </div>
      <div className={classes.body}>
      </div>
    </>
  )
}


export default VacancyFeed
