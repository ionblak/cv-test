import React from 'react';
import styles from './Education.module.css';
import { ContentSection } from '../ContentSection/ContentSection';
import { Title } from '../Title/Title';
import { SubTitle } from '../SubTitle/SubTitle';
import { DateRange } from '../DateRange/DateRange';
import cv from '../../cv_example.json'

const Education = () => (
  <ContentSection>
    <Title text='Education' fontSize='15px' />
    <SubTitle text={`${cv.education['0'].Degree.toLowerCase()} - ${cv.education['0'].Education_Title.toLowerCase()}`} fontSize='13px' />
    <div className={styles.box}>
      <SubTitle text={cv.education['0'].Education_Institution_Name.toLowerCase()} fontSize='10px' />
      <DateRange 
         text={`${cv.education['0'].Education_Start_Date} - ${cv.education['0'].Education_End_Date}`}/>
    </div>
  </ContentSection>
);

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
