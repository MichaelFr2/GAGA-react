import React from 'react'
import useStyles from './GradeButton.styles'
// import ttt from './icons/JuniorIcon';
import Ttt from './icons/Ttt';

const GradeButton = () => {
    const classes = useStyles();
  return (
    <div className={classes.wrapper}>
        <div className={classes.buttonTitle}>Junior</div>
        <Ttt />
    </div>
  )
}

export default GradeButton