import React from 'react';

import bannerSrc from '../../assets/images/policoderslab-retrospectiva.png';
import { Banner, Container } from './style';

const Home = () => (
  <Container>
    <Banner src={bannerSrc} alt="No image" />
  </Container>
)

export default Home;