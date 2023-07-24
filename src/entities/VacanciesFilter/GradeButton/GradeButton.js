import React, { useState } from 'react';
import useStyles from './GradeButton.styles';

const GradeButton = ({ buttonTitle, icon: Icon }) => {
  const [isClicked, setIsClicked] = useState(false);
  const classes = useStyles({ isClicked });

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={classes.wrapper} onClick={handleClick}>
      <Icon width="20" height="26" />
      <div className={classes.buttonTitle}>{buttonTitle}</div>
    </div>
  );
};

export default GradeButton;
