import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    height: '407px',
    width: '100%',
    backgroundColor: "#E44900",
    justifyContent: 'center',
    paddingTop: '10px',
    alignItems: 'center',
    paddingLeft: '36px',
    paddingRight: '36px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
  },
  textBlock: {
    alignItems: 'center',
    color: '#FFF',
    fontStyle: 'normal',
    marginLeft: '28px',
  },
  mainText: {
    fontSize: 'calc(30px + 1vw)',
    fontWeight: 700,
    marginBottom: '16px',
  },
  additionalText: {
    fontSize: 'calc(16px + 1vw)',
    fontWeight: 400,
  },
});

export default useStyles;
