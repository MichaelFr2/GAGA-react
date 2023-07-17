import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    height: '407px',
    backgroundColor: "#E44900",
    justifyContent: 'center',
    paddingTop: '10px',
    alignItems: 'center',
    paddingLeft: '36px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
  },
  textBlock: {
    alignItems: 'center',
    color: '#FFF',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    marginLeft: '28px',
  },
  mainText: {
    fontSize: 'calc(40px + 1vw)',
    fontWeight: 700,
    marginBottom: '16px',
  },
  additionalText: {
    fontSize: 'calc(24px + 1vw)',
    fontWeight: 400,
  },
});

export default useStyles;
