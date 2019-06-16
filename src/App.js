import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';

import ImageGallery from 'react-image-gallery';
import classNames from 'classnames';

import useWindowDimensions from './utils/useWindowDimensions'
import useStyles from './App.styles';

import "react-image-gallery/styles/css/image-gallery.css";
import "./image-gallery-custom.css";

// For IE
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


const App = () => {
  const [showVideo, setShowVideo] = React.useState({});
  const [showFullscreenButton, setShowFullscreenButton] = React.useState(true);
  const [showGalleryInfo, setShowGalleryInfo] = React.useState(true);

  const styles = useStyles();
  const { height, width } = useWindowDimensions();

  const onSlide = (index) => {
    resetVideo();
  };

  const resetVideo = () => {
    setShowVideo({});
    setShowFullscreenButton(true);
    setShowGalleryInfo(true);
  };

  const toggleShowVideo = (url) => {
    let showVideoState = showVideo;
    showVideoState[url] = !Boolean(showVideoState[url]);
    setShowVideo(showVideoState);

    if (showVideo[url]) {
      setShowFullscreenButton(false);
      setShowGalleryInfo(false);
    } else {
      resetVideo();
    }
  };

  const renderVideo = (item) => {
    return (
      <div className='image-gallery-image'>
        {
          showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
              <a
                className='close-video'
                onClick={toggleShowVideo.bind(this, item.embedUrl)}
              >
              </a>
              <iframe
                width='560'
                height='315'
                src={item.embedUrl}
                frameBorder='0'
                allowFullScreen
              >
              </iframe>
            </div>
            :
            <div>
              <div className='play-button' onClick={toggleShowVideo.bind(this, item.embedUrl)}></div>
              <img src={item.original}/>
            </div>
        }
      </div>
    );
  };


  const isWide = width > height;            //Main as 31 : 8
  const isLongPortrait = height > width*2;

  const imgDetailTitleFrameTop = 'https://i.imgur.com/SeBdV6W.png';
  const imgDetailTitleFrameBottom = 'https://i.imgur.com/K9vltG4.png';
  const imgHeartFlower = 'https://i.imgur.com/Vu3pUBq.png';
  const imgGalleryDivider = 'https://i.imgur.com/RV2AMkC.png';

  const imgSnapMain = 'https://i.imgur.com/yjRye1a.jpg';
  const imgSnapMainMobile = 'https://i.imgur.com/gNtZwju.jpg';
  const imgSnapSub = 'https://i.imgur.com/GJO0rLo.jpg';

  const imgSnaps = [
      {original: 'https://i.imgur.com/rZEbRv9.jpg', thumbnail:'https://i.imgur.com/mNS6wtc.jpg', snapIdx: 1},
      // {original: 'https://i.imgur.com/wGAgL8d.jpg', thumbnail:'https://i.imgur.com/XwgeBxY.jpg', snapIdx: 2},
      // {original: 'https://i.imgur.com/XIIizrz.jpg', thumbnail:'https://i.imgur.com/eVEaII8.jpg', snapIdx: 3},
      // {original: 'https://i.imgur.com/dYqG4lF.jpg', thumbnail:'https://i.imgur.com/GGshmcX.jpg', snapIdx: 4},
      {original: 'https://i.imgur.com/hnBRNvq.jpg', thumbnail:'https://i.imgur.com/fvTpKMn.jpg', snapIdx: 5},
      // {original: 'https://i.imgur.com/fBtNg6S.jpg', thumbnail:'https://i.imgur.com/ov7l43u.jpg', snapIdx: 6},
      // {original: 'https://i.imgur.com/GJO0rLo.jpg', thumbnail:'https://i.imgur.com/RKosXQe.jpg', snapIdx: 7, originalClass: 'portrait'},
    ].concat(isWide ? (
      [{original: 'https://i.imgur.com/gNtZwju.jpg', thumbnail:'https://i.imgur.com/cel2UUc.jpg', snapIdx: 8, originalClass: 'portrait'}]
    ) : (
      []
    )).concat([
      // {original: 'https://i.imgur.com/gNtZwju.jpg', thumbnail:'https://i.imgur.com/cel2UUc.jpg', snapIdx: 8, originalClass: 'portrait'},
      // {original: 'https://i.imgur.com/hGVWQjh.jpg', thumbnail:'https://i.imgur.com/DjIusFV.jpg', snapIdx: 9, originalClass: 'portrait'},
      // {original: 'https://i.imgur.com/O1tH3Ll.jpg', thumbnail:'https://i.imgur.com/zxKWHoR.jpg', snapIdx: 10},
      // {original: 'https://i.imgur.com/fPQSPHK.jpg', thumbnail:'https://i.imgur.com/bcb4xI0.jpg', snapIdx: 11},
      {original: 'https://i.imgur.com/rVCxcCo.jpg', thumbnail:'https://i.imgur.com/9YpOiiW.jpg', snapIdx: 12},
      // {original: 'https://i.imgur.com/QfRrMow.jpg', thumbnail:'https://i.imgur.com/ymiEvsj.jpg', snapIdx: 13},
      // {original: 'https://i.imgur.com/BXMVUQJ.jpg', thumbnail:'https://i.imgur.com/KcBYn9V.jpg', snapIdx: 14},
      {original: 'https://i.imgur.com/pabNNQ6.jpg', thumbnail:'https://i.imgur.com/dhMUCfA.jpg', snapIdx: 15},
      // {original: 'https://i.imgur.com/qid0CQf.jpg', thumbnail:'https://i.imgur.com/SAyPwa4.jpg', snapIdx: 16},
      // {original: 'https://i.imgur.com/MNhkfD5.jpg', thumbnail:'https://i.imgur.com/XqmrjCY.jpg', snapIdx: 17},
      {original: 'https://i.imgur.com/GMVaewZ.jpg', thumbnail:'https://i.imgur.com/JqX6ia1.jpg', snapIdx: 18},
      // {original: 'https://i.imgur.com/sqfQn9p.jpg', thumbnail:'https://i.imgur.com/MEQa5qw.jpg', snapIdx: 19},
      // {original: 'https://i.imgur.com/zNWD000.jpg', thumbnail:'https://i.imgur.com/am0sL16.jpg', snapIdx: 20},
      // {original: 'https://i.imgur.com/1iCUAVf.jpg', thumbnail:'https://i.imgur.com/NgftAch.jpg', snapIdx: 21},
      {original: 'https://i.imgur.com/xBegzSY.jpg', thumbnail:'https://i.imgur.com/TKl4cro.jpg', snapIdx: 22},
      // {original: 'https://i.imgur.com/q0KcH2D.jpg', thumbnail:'https://i.imgur.com/yTanjJy.jpg', snapIdx: 23},
      {original: 'https://i.imgur.com/fRJU8CS.jpg', thumbnail:'https://i.imgur.com/mbxBfoG.jpg', snapIdx: 24},
      // {original: 'https://i.imgur.com/ezinKd7.jpg', thumbnail:'https://i.imgur.com/kIY7OOE.jpg', snapIdx: 25},
      {original: 'https://i.imgur.com/uA2Hxjx.jpg', thumbnail:'https://i.imgur.com/ZJFricT.jpg', snapIdx: 26},
      // {original: 'https://i.imgur.com/OFDDby7.jpg', thumbnail:'https://i.imgur.com/XHUVRMJ.jpg', snapIdx: 27},
      // {original: 'https://i.imgur.com/1dYPIYK.jpg', thumbnail:'https://i.imgur.com/U98qqKK.jpg', snapIdx: 28},
      // {original: 'https://i.imgur.com/5nefz83.jpg', thumbnail:'https://i.imgur.com/F7V3WXA.jpg', snapIdx: 29},
      // {original: 'https://i.imgur.com/6Eq7CP7.jpg', thumbnail:'https://i.imgur.com/jxw4vIE.jpg', snapIdx: 30},
      // {original: 'https://i.imgur.com/yjRye1a.jpg', thumbnail:'https://i.imgur.com/q4gkXND.jpg', snapIdx: 31},
      {original: 'https://i.imgur.com/HDzs4Nl.jpg', thumbnail:'https://i.imgur.com/JGRyiF9.jpg', snapIdx: 32},
      // {original: 'https://i.imgur.com/9eWTC8I.jpg', thumbnail:'https://i.imgur.com/cdalzsH.jpg', snapIdx: 33},
      // {original: 'https://i.imgur.com/W95fe2j.jpg', thumbnail:'https://i.imgur.com/HkzEi2E.jpg', snapIdx: 34},
      {original: 'https://i.imgur.com/v5nwD1r.jpg', thumbnail:'https://i.imgur.com/psmrfVl.jpg', snapIdx: 35},
  ]);

  const galleryItems = imgSnaps.concat([
    {
      original: 'https://i.imgur.com/vwMBBYR.jpg',
      thumbnail: 'https://i.imgur.com/GUwi9QX.jpg',
      originalClass: 'video',
      embedUrl: 'https://www.youtube.com/embed/EOUiGao9s9c?autoplay=1&showinfo=0',
      renderItem: renderVideo.bind(this)
    },
    {
      original: 'https://i.imgur.com/VnxxGxK.jpg',
      thumbnail: 'https://i.imgur.com/Eb5YW88.jpg',
      originalClass: 'video',
      embedUrl: 'https://www.youtube.com/embed/KNxc4MUAs30?autoplay=1&showinfo=0',
      renderItem: renderVideo.bind(this)
    },
  ]);

  React.useEffect(() => {
    // // Update the document using the browser API
    let userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    ie = ieReg.test(userAgent);

    if(ie) {
      console.log("Fix IE's object-fit");

      window.$(".image-gallery-image").each(function () {
        let $container = window.$(this),
          imgUrl = $container.find("img").prop("src");
        if (imgUrl) {
          $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("ie-mode");
        }
      });
    }
    else
    {
      console.log("Not need to Fix (no IE ^^)");
    }
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={styles.container}>
        <Typography variant='h2' component='h2'
                    className={classNames(styles.announcement, styles.fontSansSerif)}>
          WEDDING ANNOUNCEMENT
        </Typography>

        {isWide ? (
          <CardMedia
            className={styles.mainSnap}
            image={imgSnapMain}
            title="Main Snap" />
        ) : ( isLongPortrait ? (
          <CardMedia
            className={styles.mainSnapMobileLong}
            image={imgSnapMainMobile}
            title="Main Snap (Mobile long ver.)" />
        ) : (
          <CardMedia
            className={styles.mainSnapMobile}
            image={imgSnapMainMobile}
            title="Main Snap (Mobile ver.)" />
        ))}

        <div className={styles.introduce} >
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
            image={imgDetailTitleFrameTop} />
          <Typography variant='h3' component='h3' gutterBottom
                      className={classNames(styles.detailTitle, styles.fontCursive)}>
            Save the Date
          </Typography>
          <Typography variant='body1' component='p' paragraph
                      className={classNames(styles.detailContent, styles.fontSerif)}>
            서로가 마주보며 다져온 사랑을 <br/>
            이제 함께 한 곳을 바라보며 걸어갈 수 있는 <br/>
            더 큰 사랑으로 키우고자 합니다. <br/>
            <br/>
            저희는 신혼여행을 떠나서 <br/>
            둘만의 소중한 작은 결혼식을 하려고 합니다. <br/>
            여러분들과 함께하지 못하는 점 양해 말씀 구하며 <br/>
            앞날을 축복해 주시면 감사하겠습니다.
          </Typography>
          <CardMedia
            className={styles.detailSubSnap}
            image={imgSnapSub}
            title="Sub Snap" />

          <div className={styles.newlywedsContainer}>
            <Typography variant='h4' component='div'
                        className={classNames(styles.newlywedsName2, styles.fontSerif)}>
              정한터&nbsp;</Typography>
            <CardMedia
              className={styles.newlywedsFlowerImg}
              image={imgHeartFlower}
              title="Heart" />
            <Typography variant='h4' component='div'
                        className={classNames(styles.newlywedsName2, styles.fontSerif)}>
              &nbsp;황수지</Typography>
          </div>

          <Typography variant='h6' component='div'
                      className={classNames(styles.detailFamily, styles.fontSerif)}>
            정문식 · 박희숙의 장남&nbsp;&nbsp;<strong className={styles.detailFamilyNewlywed}>한터</strong>
            <br />
            황용환 · 김윤희의 장녀&nbsp;&nbsp;<strong className={styles.detailFamilyNewlywed}>수지</strong>
          </Typography>

          <CardMedia
            className={styles.detailFrameBottom}
            image={imgDetailTitleFrameBottom} />
        </div>

        <div className={styles.gallery}>
          <Typography variant='h3' component='h4' gutterBottom
                      className={classNames(styles.detailTitle, styles.fontCursive)}>
            Gallery
          </Typography>

          <ImageGallery items={galleryItems} useBrowserFullscreen={false}
                        useTranslate3D={false} showPlayButton={false}
                        showBullets={showGalleryInfo} showIndex={showGalleryInfo}
                        preventDefaultTouchmoveEvent={false}
                        showFullscreenButton={showFullscreenButton}
                        lazyLoad={!isWide} /* for mobile */
                        onSlide={onSlide.bind(this)} />
          <CardMedia
            className={styles.galleryBottomDivider}
            image={imgGalleryDivider} />
        </div>

        <Typography variant='h2' component='h6' gutterBottom
                    className={classNames(styles.thanksTitle, styles.fontCursive)}>
          Thanks!
        </Typography>

      </Container>
    </React.Fragment>
  );
};

export default App;
