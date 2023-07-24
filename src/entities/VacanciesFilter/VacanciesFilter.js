import React from 'react'
import useStyles from './VacanciesFilter.styles'
import GradeButton from './GradeButton/GradeButton';
import MiddleIcon from '../../shared/icons/MiddleIcon'
import JuniorIcon from '../../shared/icons/JuniorIcon';
import SeniorIcon from '../../shared/icons/SeniorIcon';
import FavouriteIcon from '../../shared/icons/FavouriteIcon';
import BottomArrow from '../../shared/icons/BottomArrow'

const VacanciesFilter = () => {
    const classes = useStyles();
  return (
    <div className={classes.wrapper}>
        <div className={classes.blockName}>
            Фильтр
        </div>
        <div className={classes.specializationFilter}>
            <div className={classes.filterTitle}>Специализация</div>
            <div className={classes.selectWrapper}>
                <select className={classes.filterSelect}>
                    <option value="developer" >Разработчик</option>
                    <option value="analytic" >Аналитик</option>
                    <option value="product-manager" >Продакт-менеджер</option>
                </select>
                <div className={classes.iconWrapper}>
                    <BottomArrow />
                </div>
            </div>
        </div>
        <div className={classes.countryFilter}>
            <div className={classes.filterTitle}>Страна</div>
            <div className={classes.selectWrapper}>
                <select className={classes.filterSelect}>
                    <option value="rus" >Россия</option>
                    <option value="tay" >Тайланд</option>
                    <option value="geor" >Грузия</option>
                </select>
                <div className={classes.iconWrapper}>
                    <BottomArrow />
                </div>
            </div>
        </div>
        <div className={classes.occupationFilter}>
            <div className={classes.filterTitle}>Занятость</div>
            <div className={classes.selectWrapper}>
                <select className={classes.filterSelect}>
                    <option value="remote" >Удаленная</option>
                    <option value="office" >В офисе</option>
                    <option value="no-matter" >Неважно</option>
                </select>
                <div className={classes.iconWrapper}>
                    <BottomArrow />
                </div>
            </div>
        </div>
        <div className={classes.gradeFilter}>
            <div className={classes.filterTitle}>Грейд</div>
            <div className={classes.gradeWrapper}>
                <GradeButton buttonTitle="Junior" icon={JuniorIcon} />
                <GradeButton buttonTitle="Middle" icon={MiddleIcon} />
                <GradeButton buttonTitle="Senior" icon={SeniorIcon} />
            </div>

        </div>
        <button className={classes.doneButton}>Поиск</button>
    </div>
  )
}

export default VacanciesFilter