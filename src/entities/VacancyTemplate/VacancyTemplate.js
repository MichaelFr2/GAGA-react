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
    const renderOccupationType = () => {
        if(Array.isArray(vacancyData.occupationType)) {
          if(vacancyData.occupationType[0] !== 'not_mentioned') {
            return <div className={classes.filter}>{vacancyData.occupationType.join(', ')}</div>;
          }
        } else if(vacancyData.occupationType !== 'not_mentioned') {
          return <div className={classes.filter}>{vacancyData.occupationType}</div>;
        }
    }

    return (
        <div className={classes.vacancyWrapper} onClick={handleRedirect}>
            <div className={classes.vacancyHeader}>
                <div className={classes.companyName}>
                    {vacancyData.companyName === 'not_mentioned' ? '' : vacancyData.companyName}
                </div>
                <div className={classes.favouriteIcon}>
                    <FavouriteIcon />
                </div>
            </div>
            <div className={classes.vacancyName}>
                {vacancyData.vacancyName}
            </div>
            <div className={classes.vacancySalary}>
                {vacancyData.salary === 'not_mentioned' ? 'Зарплата по итогам собеседования' : vacancyData.salary+' '} 
                {vacancyData.salaryCurrency === 'not_mentioned' ? '' : vacancyData.salaryCurrency}

            </div>
            <div className={classes.filters}>
                {vacancyData.grade !== 'not_mentioned' && <div className={classes.filter}>{vacancyData.grade}</div>}
                {vacancyData.country !== 'not_mentioned' && <div className={classes.filter}>{vacancyData.country}</div>}
                {renderOccupationType()}
            </div>
        </div>
    )
}

export default VacancyTemplate
