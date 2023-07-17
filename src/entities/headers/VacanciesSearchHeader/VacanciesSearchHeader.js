import React from 'react'
import useStyles from './VacanciesSearchHeader.styles'
import VacanciesSearchGoose from '../../../shared/GooseImg/VacanciesSearchGoose'
import VacanciesSearchGrid from '../../../shared/GooseImg/VacanciesSearchGrid'
const VacanciesSearchHeader = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.gridBackground}>
          <VacanciesSearchGrid />
        </div>
        <div className={classes.gooseBlock}>
          <VacanciesSearchGoose />
        </div>
        <div className={classes.textBlock}>
          <div className={classes.mainText}>
            Подбери лучшую вакансию для себя!
          </div>
          <div className={classes.additionalText}>
            Заполни анкету!
          </div>
        </div>
      </div>
    </>
  )
}

export default VacanciesSearchHeader