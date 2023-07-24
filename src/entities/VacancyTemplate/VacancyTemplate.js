import React from 'react'
import useStyles from './VacancyTemplate.styles'
import FavouriteIcon from '../../shared/icons/FavouriteIcon';
import { useNavigate } from 'react-router-dom';
const VacancyTemplate = ({ vacancyData }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/vacancy', {state: vacancyData});
    }

    return (
        <div className={classes.vacancyWrapper} onClick={handleRedirect}>
            <div className={classes.vacancyHeader}>
                <div className={classes.companyName}>
                    {vacancyData.companyName}
                </div>
                <div className={classes.favouriteIcon}>
                    <FavouriteIcon />
                </div>
            </div>
            <div className={classes.vacancyName}>
                {vacancyData.vacancyName}
            </div>
            <div className={classes.vacancySalary}>
                {vacancyData.salary}
            </div>
            <div className={classes.filters}>
                <div className={classes.filter}>{vacancyData.gradeFilter}</div>
                <div className={classes.filter}>{vacancyData.countryFilter}</div>
                <div className={classes.filter}>{vacancyData.occupationFilter}</div>
            </div>
        </div>
    )
}

export default VacancyTemplate
