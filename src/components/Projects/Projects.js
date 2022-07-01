import React from 'react';
import { Title } from '../Title/Title';
import { ContentSection } from '../ContentSection/ContentSection';
export const Projects = ({projects}) => (
  <ContentSection>
    <Title text='Projects' />
  </ContentSection>
);

Projects.propTypes = {};

Projects.defaultProps = {
  projects:[]
};

