import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';

import ImageGallery from 'react-image-gallery';
import classNames from 'classnames';

import useWindowDimensions from './utils/useWindowDimensions'
import useStyles from './App.styles';

import imgSnapMain from './assets/img/snap/32.jpg'
import imgSnapMainMobile from './assets/img/snap/08.jpg'
// import imgSnapMain from './assets/img/snap/temp.jpg'
// import imgSnapMainMobile from './assets/img/snap/temp.jpg'
import imgSnapSub from './assets/img/snap/07.jpg'

import imgHeartFlower from './assets/img/frames/flower_1.png'
import imgDetailTitleFrameTop from './assets/img/frames/flower_frame_top.png'
import imgDetailTitleFrameBottom from './assets/img/frames/flower_frame_bottom.png'

import imgSnaps from './assets/img/snap'
import "react-image-gallery/styles/css/image-gallery.css";
import "./image-gallery-custom.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = useStyles();
    const {height, width} = useWindowDimensions();

    return (
      <React.Fragment>
        <CssBaseline/>
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
          ) : (height > width * 2 ? (
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

          <div className={styles.introduce}>
            <div className={styles.newlywedsContainer}>
              <Typography variant='h4' component='span'
                          className={classNames(styles.newlywedsName, styles.fontHandwriting)}>
                한터</Typography>
              <Typography variant='h5' component='span'
                          className={classNames(styles.newlywedsHeart, styles.fontHandwriting)}>
                &nbsp;♥&nbsp;</Typography>
              <Typography variant='h4' component='span'
                          className={classNames(styles.newlywedsName, styles.fontHandwriting)}>
                수지</Typography>
            </div>
            <div className={styles.dateContainer}>
              <Typography variant='h6' component='div'
                          className={classNames(styles.date, styles.fontHandwriting)}>
                2019.08.07. WED.
              </Typography>
            </div>
          </div>

          <div className={styles.details}>
            <CardMedia
              className={styles.detailFrameTop}
              image={imgDetailTitleFrameTop}
            />
            <Typography variant='h3' component='h3' gutterBottom
                        className={classNames(styles.detailTitle, styles.fontCursive)}>
              Save the Date
            </Typography>
            <Typography variant='p' component='p' paragraph
                        className={classNames(styles.detailContent, styles.fontSerif)}>
              서로가 마주보며 다져온 사랑을 <br/>
              이제 함께 한 곳을 바라보며 걸어갈 수 있는 <br/>
              큰 사랑으로 키우고자 합니다. <br/>
              <br/>
              저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게 <br/>
              앞날을 축복해 주시면 감사하겠습니다.
            </Typography>
            <CardMedia
              className={styles.detailSubSnap}
              image={imgSnapSub}
              title="Sub Snap"
            />

            <div className={styles.newlywedsContainer}>
              <Typography variant='h4' component='div'
                          className={classNames(styles.newlywedsName2, styles.fontSerif)}>
                정한터&nbsp;</Typography>
              <CardMedia
                className={styles.newlywedsFlowerImg}
                image={imgHeartFlower}
                title="Heart"
              />
              <Typography variant='h4' component='div'
                          className={classNames(styles.newlywedsName2, styles.fontSerif)}>
                &nbsp;황수지</Typography>
            </div>

            <Typography variant='h6' component='div'
                        className={classNames(styles.detailFamily, styles.fontSerif)}>
              정문식 · 박희숙의 장남&nbsp;&nbsp;<strong className={styles.detailFamilyNewlywed}>한터</strong>
              <br/>
              황용환 · 김윤희의 장녀&nbsp;&nbsp;<strong className={styles.detailFamilyNewlywed}>수지</strong>
            </Typography>

            <CardMedia
              className={styles.detailFrameBottom}
              image={imgDetailTitleFrameBottom}
            />
          </div>

          <div className={styles.gallery}>
            <Typography variant='h3' component='h4' gutterBottom
                        className={classNames(styles.detailTitle, styles.fontCursive)}>
              Gallery
            </Typography>

            <ImageGallery items={imgSnaps} lazyLoad={false} useBrowserFullscreen={false}
                          useTranslate3D={false} showPlayButton={false}
                          preventDefaultTouchmoveEvent={true}/>
          </div>

        </Container>
      </React.Fragment>
    );
  }
};

export default App;
