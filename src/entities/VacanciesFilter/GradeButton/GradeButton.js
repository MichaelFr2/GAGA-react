import React from 'react';
import useStyles from './GradeButton.styles';

const GradeButton = ({ buttonTitle, icon: Icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {Icon && <Icon />}
      <div className={classes.buttonTitle}>{buttonTitle}</div>
    </div>
  );
};

export default GradeButton;
