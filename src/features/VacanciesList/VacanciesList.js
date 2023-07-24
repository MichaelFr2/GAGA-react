import React from 'react'
import useStyles from './VacnciesList.styles'
import VacancyTemplate from '../../entities/VacancyTemplate/VacancyTemplate';
import vacancyData from '../../shared/storage/vacancyData.json'
const VacanciesList = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Вакансии</div>
      {vacancyData.map((vacancy) => (
        <VacancyTemplate key={vacancy.id} vacancyData={vacancy} /> // передача данных вакансии в каждый компонент VacancyTemplate
      ))}    
    </div>
  )
}

export default VacanciesList