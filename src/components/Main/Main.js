import React from 'react';
import { ContentSection } from '../ContentSection/ContentSection';
import { SubTitle } from '../SubTitle/SubTitle';
import { Title } from '../Title/Title';
import { Description } from '../Description/Description';

export const Main = ({name, title, text}) => (
    <ContentSection>
      <Title text={name.toLowerCase()} fontSize='17px' />
      <SubTitle text={title.toLowerCase()} fontSize='13px' />
      <Description text={text.toLowerCase()} />
    </ContentSection>
);

Main.propTypes = {};

Main.defaultProps = {};

