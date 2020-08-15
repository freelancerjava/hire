import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { } from './redux/hooks';
import { useQuery } from 'react-query';
import { getVideos } from './query'
import { Container, Row, Col } from 'reactstrap';
import { baseURL } from '../../axios';
import { Link } from 'react-router-dom';
import Rating from 'react-rating'
export default function VideosPage() {


  return (
    <VideosContainer />
  );
};

export const VideosContainer = () => {
  const videos = useQuery(['svideos'], getVideos)
  return (
    <div className="video-videos-page">

      <Container>
        <Row>
          <Col md={12}>
            <div className={`m-3 d-flex justify-content-center`}>
              <h2>Video darsliklar</h2>
            </div>
          </Col>
          {
            videos.data && videos.data.map((item, index) => {
              return (
                <Col md={12}>
                  <div className={`d-flex m-1 flex-column flex-sm-row rounded video-item p-1 `}>
                    <div className={`rounded d-flex align-items-center justify-content-center`}>
                      <img src={baseURL + item.thumbnail.url}
                        className={`vimg rounded`} />
                    </div>
                    <div className={`flex-column w-100 p-2`}>
                      <h4 className={`text-center`}>{item.name}</h4>
                      <div className={`text-justify text-secondary description`}>
                        {item.description}
                        {item.description}
                      </div>
                      <hr />
                      <div>
                        <span className={`text-secondary`}>Reyting: </span>
                        <Rating
                          fractions={2}
                          readonly
                          placeholderRating={3.5}
                          emptySymbol={<img src={require("../../images/rating/star-grey.png")} className="icon" />}
                          placeholderSymbol={<img src={require("../../images/rating/star-yellow.png")} className="icon" />}
                          fullSymbol={<img src={require("../../images/rating/star-yellow.png")} className="icon" />}
                        />

                        <span className={`m-1`}>|</span>
                        <span className={`text-secondary`}>Ko'rilgan: </span>
                        <span className={`text-primary`}>{item.views}</span>

                        <span className={`m-1`}>|</span>
                        <span className={`text-secondary`}>Kategoriya: </span>
                        <span className={`text-primary`}><Link to={`videos/category/${item.category.suid}`}>{item.category.name}</Link></span>

                        <span className={`m-1`}>|</span>
                        <span className={`text-secondary`}>Til: </span>
                        <span className={`text-success`}>{item.language.name}</span>

                      </div>
                      <hr />


                      <div className={`d-flex justify-content-end`}>
                        <Link className={`btn btn-outline-primary`} to={`videos/${item.id}`}>Ko'rish</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div >

  )
}

VideosPage.propTypes = {};
VideosPage.defaultProps = {};
