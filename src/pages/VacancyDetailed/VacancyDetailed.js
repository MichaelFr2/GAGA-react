import React, { useEffect } from 'react'
import useStyles from './VacancyDetailed.styles'

const VacancyDetailed = () => {
  const data = `
    E-ngineers company works in telecommunications, banks & risk management, e-commerce and monitoring of software deliveries in large corporates.                  
  
    We are focused on development of web and mobile applications as well as DevOps projects.

    Required Skills:

    4+ years of work experience involving quantitative data analysis and complex problem solving 
    A strong understanding of statistical concepts, measurement issues, and inference techniques  
    Mastery of SQL, Excel, and either Python or R, along with some experience with Tableau, Mode, or other visualization software 
    Experience with ETL pipelines, scheduling and productionalizing is a plus  
    Experience with A/B Testing, Experimentation, or Casual Inference 
    C1 level of English     
  `
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <div className={classes.wrapper}>
            <div className={classes.headerTemplate}>
                <div className={classes.companyName}>
                    engineers
                </div>
                <div className={classes.vacancyName}>
                    Senior Data Scientist
                </div>
                <div className={classes.filters}>
                    <div className={classes.filter}>Senior</div>
                    <div className={classes.filter}>Russia</div>
                    <div className={classes.filter}>Удаленная</div>
                </div>
            </div>
            <div className={classes.salaryWrapper}>
                60 000$ a year
            </div>
            <div className={classes.vacancyBody}>
                {data}                      
            </div>
            <div className={classes.dataBlock}>
                Posted today                     
            </div>
            <button className={classes.doneButton}>Откликнуться</button>
        </div>
    </>
  )
}

export default VacancyDetailed