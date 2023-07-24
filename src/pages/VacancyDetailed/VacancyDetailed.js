import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './VacancyDetailed.styles'

const VacancyDetailed = () => {
  const location = useLocation();
  const vacancyData = location.state;
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  if (!vacancyData) {
    return <div>No data available</div>;
  }

  return (
    <>
        <div className={classes.wrapper}>
            <div className={classes.headerTemplate}>
                <div className={classes.companyName}>
                    {vacancyData.companyName}
                </div>
                <div className={classes.vacancyName}>
                    {vacancyData.vacancyName}
                </div>
                <div className={classes.filters}>
                    <div className={classes.filter}>{vacancyData.gradeFilter}</div>
                    <div className={classes.filter}>{vacancyData.countryFilter}</div>
                    <div className={classes.filter}>{vacancyData.occupationFilter}</div>
                </div>
            </div>
            <div className={classes.salaryWrapper}>
                {vacancyData.salary}
            </div>
            <div className={classes.vacancyBody}>
                {vacancyData.vacancyBody.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </div>
            <div className={classes.dataBlock}>
                {vacancyData.postedData}                     
            </div>
            <button className={classes.doneButton}>Откликнуться</button>
            <button className={classes.returnButton} onClick={() => navigate(-1)}>Return back</button>

        </div>
    </>
  )
}

export default VacancyDetailed
