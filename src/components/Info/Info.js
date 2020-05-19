import React from 'react';
import Container from '../Container/Container';
import { InfoData } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={InfoData.title} image={InfoData.image} />
    <p>{InfoData.pageContent}</p>
  </Container>
);

export default Info;