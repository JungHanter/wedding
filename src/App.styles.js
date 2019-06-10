import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    padding: 0,
  },

  announcement: {
    fontSize: '0.9em',
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
    marginTop: theme.spacing(2.6),
    marginBottom: theme.spacing(2.6),
  },
  newlywedsContainer: {
    align: 'center',
    textAlign: 'center',
    color: '#000',
    fontSize: '2.4em',
  },
  newlywedsName: {
    align: 'center',
    display: 'inline-block'
  },
  newlywedsHeart: {
    align: 'center',
    verticalAlign: 'center',
    display: 'inline-block',
    fontSize: '0.8em',
    color: '#e9967a', //darkSalmon
    // color: '#d19fa1',
  },
  dateContainer: {
    align: 'center',
    textAlign: 'center',
    // color: '#808080',
    color: '#a5a9a0',
  },
  date: {
    align: 'center',
  },

  details: {

  },
  detailHeader: {
    align: 'center',
    textAlign: 'center',
  },
  detailTitle: {
    color: '#545450',
    // color: '#7b7075',
  },

  fontSerif: {
    fontFamily: ['Jeju Myeongjo', 'Nanum Myeongjo', 'serif'],
  },
  fontSansSerif: {
    fontFamily: ['WONDotum', 'Nanum Gothic', 'sans-serif'],
  },
  fontCursive: {
    fontFamily: ['Parisienne', 'cursive'],
  },
}));

export default useStyles;
