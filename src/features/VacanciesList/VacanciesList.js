import React from 'react'
import useStyles from './VacnciesList.styles'
import VacancyTemplate from '../../entities/VacancyTemplate/VacancyTemplate'
import vacancyData from '../../shared/storage/vacancyData.json'

const VacanciesList = ({ occupationFilter, countryFilter, specializationFilter }) => {
  const classes = useStyles()

  const activeVacancies = vacancyData
    .filter(vacancy => vacancy.isVacancy)
    .filter(vacancy => {
      if (specializationFilter === 'no-matter' || specializationFilter === '') {
        return true;
      }
      return vacancy.specialization === specializationFilter;
    })
    .filter(vacancy => {
      if (occupationFilter === 'no-matter' || occupationFilter === '') {
        return true;
      }
      if (Array.isArray(vacancy.occupationType)) {
        return vacancy.occupationType.includes(occupationFilter);
      } else {
        return vacancy.occupationType === occupationFilter;
      }
    })
    .filter(vacancy => {
      if (countryFilter === 'no-matter' || countryFilter === '') {
        return true;
      }
      return vacancy.country === countryFilter;
    });

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Вакансии (всего: {activeVacancies.length})</div>
      {activeVacancies.map((vacancy) => (
        <VacancyTemplate key={vacancy.id} vacancyData={vacancy} /> 
      ))}    
    </div>
  )
}

export default VacanciesList
