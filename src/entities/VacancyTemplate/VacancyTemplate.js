import React from 'react'
import useStyles from './VacancyTemplate.styles'

const VacancyTemplate = () => {
    const classes = useStyles();
  return (
    <div className={classes.vacancyWrapper}>
        <div className={classes.vacancyHeader}>
            <div className={classes.companyName}>
                Ivanov&Co
            </div>
            <div className={classes.favouriteIcon}></div>
        </div>
        <div className={classes.vacancyName}>
            Senior Data Engineer
        </div>
        <div className={classes.vacancySalary}>
            150 000 - 250 000 руб.
        </div>
        <div className={classes.filters}>
        </div>
    </div>
  )
}

export default VacancyTemplate