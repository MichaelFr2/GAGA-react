import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    width: '100px',
    height: '34px',
    padding: '2px 11px 2px 4px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '13px',
    flexShrink: 0,
    borderRadius: '25px',
    backgroundColor: '#F3F3F3',
    flexGrow: 1,
    maxWidth: '300px',
  },
  icon: {
    width: '20px',
    height: '26px',
  },
});

export default useStyles;
