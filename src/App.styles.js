import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    padding: 0,
    // background: '#f0f2fa'
  },

  announcement: {
    fontSize: '1em',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1.5),
    marginLeft: 'auto',
    marginRight: 'auto',
    // color: '#f08080', //lightCoral
    color: '#e9967a', //darkSalmon
    // color: '#ffa07a',
    // color: '#d19fa1',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4em',
    },
  },

  mainSnap: {
    width: '100%',
    height: 0,
    paddingTop: '66.667%', //1.5:1
  },
  mainSnapMobile: {
    width: '100%',
    height: 0,
    paddingTop: '120%', //1:1.2 (cut from 1:1.5)
    backgroundPosition: 'top 80% left 0',
  },
  mainSnapMobileLong: {
    width: '100%',
    height: 0,
    paddingTop: '150%', //1:1.5
  },

  introduce: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3.6 ),
  },
  newlywedsContainer: {
    align: 'center',
    textAlign: 'center',
    color: '#000',
  },
  newlywedsName: {
    align: 'center',
    display: 'inline-block',
    fontSize: '3.2em',
  },
  newlywedsHeart: {
    align: 'center',
    verticalAlign: 'center',
    display: 'inline-block',
    fontSize: '2.8em',
    color: '#e9967a', //darkSalmon
    // color: '#d19fa1',
  },
  newlywedsName2: {
    align: 'center',
    display: 'inline-block',
    fontSize: '2.4em',
  },
  newlywedsFlowerImg: {
    display: 'inline-block',
    width: '2.6em',
    height: 0,
    paddingTop: '2em', //1:1
    verticalAlign: true,
    backgroundPosition: 'bottom 0 left 0',
    backgroundSize: '100%'
  },
  dateContainer: {
    align: 'center',
    textAlign: 'center',
    // color: '#808080',
    color: '#a5a9a0',
    marginTop: theme.spacing(1),
  },
  date: {
    align: 'center',
    fontSize: '2em',
  },

  details: {
  },
  detailTitle: {
    align: 'center',
    textAlign: 'center',
    color: '#545450',
    // color: '#7b7075',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down(460)]: {
      marginBottom: theme.spacing(2.2),
    },
  },
  detailContent: {
    align: 'center',
    textAlign: 'center',
    fontSize: '1.5em',
    [theme.breakpoints.down(460)]: {
      fontSize: '1.2em',
    },
    [theme.breakpoints.down(380)]: {
      fontSize: '1em',
    },
  },
  detailSubSnap: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3.5),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%',
    height: 0,
    paddingTop: '60%', //1:1
    borderRadius: '50%',
  },
  detailFrameTop: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '80%',
    height: 0,
    paddingTop: '28.022%',
    backgroundSize: 'contain'
  },
  detailFrameBottom: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '80%',
    height: 0,
    paddingTop: '28.104%',
    backgroundSize: 'contain'
  },

  detailFamily: {
    marginTop: theme.spacing(2),
    align: 'center',
    textAlign: 'center',
    lineHeight: '1.3',
    fontSize: '1.5em',
    color: '#545450',
    [theme.breakpoints.down(380)]: {
      fontSize: '1.2em',
    },
  },
  detailFamilyNewlywed: {
    fontSize: '1.2em',
  },

  gallery: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  galleryBottomDivider: {
    marginTop: theme.spacing(12),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    height: 0,
    // paddingTop: '5.313%',  //100% for 5
    // paddingTop: '4.25%',      //80% for 5
    // paddingTop: '5.59937%',  //100% for 2
    paddingTop: '4.4795%',      //80% for 2
  },
  thanksTitle: {
    marginTop: theme.spacing(24),
    marginBottom: theme.spacing(24),
    align: 'center',
    textAlign: 'center',
    color: '#545450',
    // color: '#7b7075',
  },

  fontSerif: {
    fontFamily: ['GyeonggiBatang', 'Jeju Myeongjo', 'Nanum Myeongjo', 'serif'],
  },
  fontSansSerif: {
    fontFamily: ['WONDotum', 'Nanum Gothic', 'sans-serif'],
  },
  fontCursive: {
    fontFamily: ['Parisienne', 'cursive'],
  },
  fontHandwriting: {
    fontFamily: ['KimNamyun', 'cursive'],
  },
}));

export default useStyles;
