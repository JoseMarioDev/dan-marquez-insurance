/* eslint-disable react/display-name */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import home from '../../assets/img/home.jpg';

export default () => (
  <Carousel autoPlay>
    <div>
      <img src={home} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={home} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={home} />
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
);
