import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    marginLeft: '16px',
    marginRight: '16px',
    marginTop: '30px',
    position: 'relative',
  },
  blockName: {
    marginBottom: '18px',
    fontSize: '24px',
    fontWeight: 600,
  },
  filterTitle: {
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '6px',
  },
  filterSelect: {
    height: '49px',
    padding: '14px 12px',
    fontSize: '16px',
    borderRadius: '9px',
    border: '1px solid #DFDFDF',
    outline: 'none',
    color: '#808080',
    zIndex: 2,
    marginBottom: '15px',
    '& input, & select, & button': {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      'appearance': 'none',
    },
    width: '100%',
  },
  '@media screen and (-webkit-min-device-pixel-ratio: 0)': {
    'select:focus, textarea:focus, input:focus': {
      fontSize: '16px', 
    }
  },
  gradeWrapper: {
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    gap: '5px',
  },
  doneButton: {
    marginTop: '40px',
    marginBottom: '40px',
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
  }
});

export default useStyles;
