import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './VacancyDetailed.styles'
import ReturnArrow from '../../shared/icons/ReturnArrow';

const VacancyDetailed = () => {
  const location = useLocation();
  const { vacancyData, filters } = location.state;
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();


  if (!vacancyData) {
    return <div>No data available</div>;
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
    <>
        <div className={classes.wrapper}>
            <button className={classes.returnButton} onClick={() => navigate('/vacancies', { state: filters })}> <ReturnArrow /> Назад </button>
            <div className={classes.headerTemplate}>
                <div className={classes.companyName}>
                    {vacancyData.companyName === 'not_mentioned' ? '' : vacancyData.companyName}
                </div>
                <div className={classes.vacancyName}>
                    {vacancyData.vacancyName}
                </div>
                <div className={classes.filters}>
                    {vacancyData.grade !== 'not_mentioned' && <div className={classes.filter}>{vacancyData.grade}</div>}
                    {vacancyData.country !== 'not_mentioned' && <div className={classes.filter}>{vacancyData.country}</div>}
                    {renderOccupationType()}
                </div>
            </div>
            <div className={classes.salaryWrapper}>
                {vacancyData.salary === 'not_mentioned' ? 'Зарплата по итогам собеседования' : vacancyData.salary+' '} 
                {vacancyData.salaryCurrency === 'not_mentioned' ? '' : vacancyData.salaryCurrency}            </div>
            <div className={classes.vacancyBody}>
                {vacancyData.vacancyText.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </div>
            <div className={classes.dataBlock}>
                {vacancyData.date}                     
            </div>
            <button className={classes.doneButton}>Откликнуться</button>
        </div>
    </>
  )
}

export default VacancyDetailed
