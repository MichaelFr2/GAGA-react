import React, { useState } from 'react'
import useStyles from './VacanciesFilter.styles'
import GradeButton from './GradeButton/GradeButton'
import MiddleIcon from '../../shared/icons/MiddleIcon'
import JuniorIcon from '../../shared/icons/JuniorIcon'
import SeniorIcon from '../../shared/icons/SeniorIcon'
import BottomArrow from '../../shared/icons/BottomArrow'

const VacanciesFilter = ({ setOccupationFilter, setCountryFilter, setSpecializationFilter, initialFilters }) => {
    const classes = useStyles()

    // Use initial filters from props
    const [occupation, setOccupation] = useState(initialFilters.occupationFilter);
    const [country, setCountry] = useState(initialFilters.countryFilter);
    const [specialization, setSpecialization] = useState(initialFilters.specializationFilter);

    const handleOccupationChange = (event) => {
        setOccupation(event.target.value);
        setOccupationFilter(event.target.value);
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
        setCountryFilter(event.target.value);
    }

    const handleSpecializationChange = (event) => {
        setSpecialization(event.target.value);
        setSpecializationFilter(event.target.value);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.blockName}>
                Фильтр
            </div>
            <div className={classes.specializationFilter}>
                <div className={classes.filterTitle}>Специализация</div>
                <div className={classes.selectWrapper}>
                    <select className={classes.filterSelect} onChange={handleSpecializationChange} value={specialization}>
                        <option value="Developer">Разработчик</option>
                        <option value="Analyst">Аналитик</option>
                        <option value="QA">QA</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Project manager">Project manager</option>
                        <option value="Tech Manager">Tech manager</option>
                        <option value="UI/UX designer">UI/UX</option>
                        <option value="DevOps">DevOps</option>
                        <option value="no-matter">Любая</option>
                    </select>
                    <div className={classes.iconWrapper}>
                        <BottomArrow />
                    </div>
                </div>
            </div>
            <div className={classes.countryFilter}>
                <div className={classes.filterTitle}>Страна</div>
                <div className={classes.selectWrapper}>
                    <select className={classes.filterSelect} onChange={handleCountryChange} value={country}>
                        <option value="Turkey">Турция</option>
                        <option value="Serbia">Сербия</option>
                        <option value="Indonesia">Индонезия</option>
                        <option value="no-matter">Любая</option>
                    </select>
                    <div className={classes.iconWrapper}>
                        <BottomArrow />
                    </div>
                </div>
            </div>
            <div className={classes.occupationFilter}>
                <div className={classes.filterTitle}>Занятость</div>
                <div className={classes.selectWrapper}>
                    <select className={classes.filterSelect} onChange={handleOccupationChange} value={occupation}>
                        <option value="удаленная">Удаленная</option>
                        <option value="office">В офисе</option>
                        <option value="no-matter">Любая</option>
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
