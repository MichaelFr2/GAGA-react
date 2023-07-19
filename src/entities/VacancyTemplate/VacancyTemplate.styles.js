import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  vacancyWrapper: {
    marginLeft: '16px',
    marginRight: '16px',
    marginBottom: '12px',
    top: '0',
    zIndex: 10,
    paddingTop: '19px',
    paddingBottom: '15px',
    paddingLeft: '16px',
    paddingRight: '14px',
    backgroundColor: 'white',
    borderRadius: '9px',
    boxShadow: '0px 0px 23px 0px rgba(54, 77, 96, 0.05)',

  },
  vacancyHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  companyName: {
    color: '#E44900',
    fontSize: '13px',
    fontWeight: 400,
    marginBottom: '17px',
  },
  vacancyName: {
    color: '#333',
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '7px',
  },
  vacancySalary: {
    color: '#333',
    fontSize: '13px',
    fontWeight: 600,
    marginBottom: '7px',
  },
});

export default useStyles;
