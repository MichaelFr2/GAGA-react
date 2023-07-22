import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: '#F9FAFB',
    paddingTop: '30px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '40px',
    width: '100%',
    height: '100%',
  },
  headerTemplate: {
    borderRadius: '9px',
    background: '#E44900',
    boxShadow: '0px 0px 23px 0px rgba(54, 77, 96, 0.05)',
    paddingLeft: '17px',
    paddingTop: '10px',
    paddingBottom: '11px',
    marginBottom: '10px',
  },
  companyName: {
    color: '#FFF',
    fontSize: '13px',
    fontWeight: 400,
    paddingBottom: '30px',
  },
  vacancyName: {
    color: '#FFF',
    fontSize: '28px',
    fontWeight: 600,
    paddingBottom: '13px',
  },
  body: {
    backgroundColor: '#F9FAFB',
  },
  filters: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',    
  },
  filter: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '11px',
    fontWeight: 400,
    marginRight: '6px',
    borderRadius: '25px',
    background: 'rgba(243, 243, 243, 0.34)',
    padding: '2px 11px',
  },
  salaryWrapper: {
    paddingTop: '14px',
    paddingLeft: '14px',
    paddingBottom: '11px',
    marginBottom: '10px',
    color: '#333',
    fontSize: '16px',
    fontWeight: 600,
    backgroundColor: '#fff',
    borderRadius: '9px',
    boxShadow: '0px 0px 23px 0px rgba(54, 77, 96, 0.05)',
  },
  vacancyBody: {
    paddingTop: '15px',
    paddingLeft: '13px',
    paddingRight: '11px',
    paddingBottom: '12px',
    borderRadius: '9px',
    background: '#FFF',
    boxShadow: '0px 0px 23px 0px rgba(54, 77, 96, 0.05)',
    color: '#000',
    fontSize: '15px',
    fontWeight: 400,
    whiteSpace: 'pre-line',
  },
  dataBlock: {
    marginTop: '14px',
    color: '#969696',
    fontSize: '14px',
    fontWeight: 300,
    paddingLeft: '8px',
    marginBottom: '32px',
  },
  doneButton: {
    display: 'flex',
    width: '100%',
    padding: '13px 20px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    background: '#E44900',
    color: 'white',
    outline: 'none',
    border: '0px',
    fontSize: '17px',
    fontWeight: 400,
    marginBottom: '35px',
  },
  returnButton: {
    marginTop: '14px',
    color: '#969696',
    fontSize: '14px',
    fontWeight: 300,
    paddingLeft: '8px',
    marginBottom: '32px',
    outline: 'none',
    border: '0px',
    backgroundColor: '#F9FAFB',
  },
});

export default useStyles;
