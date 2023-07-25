import React from 'react'
import useStyles from './VacanciesList.styles'
import VacancyTemplate from '../../entities/VacancyTemplate/VacancyTemplate'
import vacancyData from '../../shared/storage/vacancyData.json'

const VacanciesList = ({ occupationFilter, countryFilter, specializationFilter, gradeFilter }) => {
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
    })
    .filter(vacancy => {
      if (gradeFilter.includes('no-matter') || gradeFilter.length === 0) {
        return true;
      }
      return gradeFilter.includes(vacancy.grade);
    });

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerWrapper}>
        <div className={classes.header}>Вакансии</div>
        <div className={classes.vacanciesCount}>Всего: {activeVacancies.length}</div>
      </div>
      {activeVacancies.map((vacancy) => (
        <VacancyTemplate 
            key={vacancy.id} 
            vacancyData={vacancy} 
            filters={{ occupationFilter, countryFilter, specializationFilter, gradeFilter }} 
        /> 
      ))}  
    </div>
  )
}


export default VacanciesList
