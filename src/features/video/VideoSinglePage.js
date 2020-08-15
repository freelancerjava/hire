import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { } from './redux/hooks';
import { withRouter } from 'react-router-dom';

import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';

import { useQuery } from 'react-query';
import { getVideo } from './query'
import { baseURL } from '../../axios';
import { Container, Row, Col } from 'reactstrap';
import { VideosContainer } from './VideosPage';

export default withRouter(function VideoSinglePage({ history }) {
  const id = history.location.pathname.split("videos/")[1]
  const video = useQuery(['svideos', { id: id }], getVideo)
  console.log(video);

  return (
    <div className="video-video-single-page">
      <Container>
        <Row className={`justify-content-center p-4`}>
          <Col md={8}>
            <div className={`video-container m-4`}>
              {video.data &&
                <Player
                  playsInline
                  poster={`${baseURL + video.data.thumbnail.url}`}
                  src={`${baseURL + video.data.video.url}`}
                >
                  <ControlBar>
                    <ReplayControl seconds={10} order={1.1} />
                    <ForwardControl seconds={30} order={1.2} />
                    <CurrentTimeDisplay order={4.1} />
                    <TimeDivider order={4.2} />
                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                    <VolumeMenuButton disabled />
                  </ControlBar>
                </Player>}
            </div>
          </Col>
        </Row>
      </Container>

      <VideosContainer />

    </div>
  );
})