import React from 'react'
import useStyles from './VacancyTemplate.styles'
import FavouriteIcon from '../../shared/icons/FavouriteIcon';
import { useNavigate } from 'react-router-dom';

const VacancyTemplate = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/vacancy');
    }

    return (
        <div className={classes.vacancyWrapper} onClick={handleRedirect}>
            <div className={classes.vacancyHeader}>
                <div className={classes.companyName}>
                    Ivanov&Co
                </div>
                <div className={classes.favouriteIcon}>
                    <FavouriteIcon />
                </div>
            </div>
            <div className={classes.vacancyName}>
                Senior Data Engineer
            </div>
            <div className={classes.vacancySalary}>
                150 000 - 250 000 руб.
            </div>
            <div className={classes.filters}>
                <div className={classes.filter}>Junior</div>
                <div className={classes.filter}>Russia</div>
                <div className={classes.filter}>Удаленная</div>
            </div>
        </div>
    )
}

export default VacancyTemplate
