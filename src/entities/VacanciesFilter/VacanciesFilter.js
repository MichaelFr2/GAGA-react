import React from 'react'
import useStyles from './VacanciesFilter.styles'
const VacanciesFilter = () => {
    const classes = useStyles();
  return (
    <div className={classes.wrapper}>
        <div className={classes.blockName}>
            Фильтр
        </div>
        <div classname={classes.specializationFilter}>
            <div className={classes.filterTitle}>
                Специализация
            </div>
        <select 
            className={classes.filterSelect} 
        >
            <option value="developer" >Разработчик</option>
            <option value="analytic" >Аналитик</option>
            <option value="product-manager" >Продакт-менеджер</option>
        </select>
        </div>
        <div classname={classes.countryFilter}>
            <div className={classes.filterTitle}>Страна</div>
            <select className={classes.filterSelect}>
                <option value="rus" >Россия</option>
                <option value="tay" >Тайланд</option>
                <option value="geor" >Грузия</option>
            </select>
        </div>
        <div classname={classes.occupationFilter}>
            <div className={classes.filterTitle}>Занятость</div>
            <select className={classes.filterSelect}>
                <option value="remote" >Удаленная</option>
                <option value="office" >В офисе</option>
                <option value="no-matter" >Неважно</option>
            </select>
        </div>
        <div classname={classes.gradeFilter}>
            <div className={classes.filterTitle}>Грейд</div>
            <select className={classes.filterSelect}>
                <option value="remote" >Удаленная</option>
                <option value="office" >В офисе</option>
                <option value="no-matter" >Неважно</option>
            </select>
        </div>
    </div>
  )
}

export default VacanciesFilter