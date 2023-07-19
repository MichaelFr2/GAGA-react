import React from 'react'
import useStyles from './VacnciesList.styles'
import VacancyTemplate from '../../entities/VacancyTemplate/VacancyTemplate';

const VacanciesList = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
        <div className={classes.header}>Вакансии</div>
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
  )
}

export default VacanciesList