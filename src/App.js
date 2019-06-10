import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';

import classNames from 'classnames';
import useStyles from './App.styles';
import useWindowDimensions from './utils/useWindowDimensions'

import imgSnapMain from './assets/img/snap/32.jpg'
import imgSnapMainMobile from './assets/img/snap/08.jpg'
// import imgSnapMain from './assets/img/snap/temp.jpg'
// import imgSnapMainMobile from './assets/img/snap/temp.jpg'

const App = () => {
  const styles = useStyles();
  const { height, width } = useWindowDimensions();

  let SnapImage

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={styles.container}>
        <Typography variant='h2' component='h2'
                    className={classNames(styles.announcement, styles.fontSansSerif)}>
          WEDDING ANNOUNCEMENT
        </Typography>

        {width > height ? (
          <CardMedia
            className={styles.mainSnap}
            image={imgSnapMain}
            title="Main Snap"
          />
        ) : ( height > width*1.9 ? (
          <CardMedia
            className={styles.mainSnapMobileLong}
            image={imgSnapMainMobile}
            title="Main Snap (Mobile long ver.)"
          />
        ) : (
          <CardMedia
            className={styles.mainSnapMobile}
            image={imgSnapMainMobile}
            title="Main Snap (Mobile ver.)"
          />
        ))}

        <div className={styles.introduce} >
          <div className={styles.newlywedsContainer}>
            <Typography variant='h4' component='span'
                        className={classNames(styles.newlywedsName, styles.fontSansSerif)}>
              한터
            </Typography>
            <Typography variant='h5' component='span'
                        className={classNames(styles.newlywedsHeart, styles.fontSansSerif)}>
              &nbsp;♥&nbsp;
            </Typography>
            <Typography variant='h4' component='span'
                        className={classNames(styles.newlywedsName, styles.fontSansSerif)}>
              수지
            </Typography>
          </div>
          <div className={styles.dateContainer}>
            <Typography variant='h6' component='div'
                        className={classNames(styles.date, styles.fontSansSerif)}>
              2019.08.07. WED.
            </Typography>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detailHeader}>
            <Typography variant='h3' component='h3'
                        className={classNames(styles.detailTitle, styles.fontCursive)}>
              Save the Date
            </Typography>
          </div>
        </div>

      </Container>
    </React.Fragment>
  );
};

export default App;
