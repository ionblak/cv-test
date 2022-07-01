import React from 'react';
import styles from './Certificates.module.css';
import { Title } from '../Title/Title';
import { SubTitle } from '../SubTitle/SubTitle';
import { DateRange } from '../DateRange/DateRange';
import { ContentSection } from '../ContentSection/ContentSection';

 export const Certificates = ({certifications}) => (
  <ContentSection>
    <Title text='Certificates' fontSize='15px'/>
    {Object.values(certifications).map((item, index)=>(
      <div key={index}>
      <div className={styles.flex}>
      {item.Course_Name && <SubTitle  text={item.Course_Name.toLowerCase()}/>}
      {item.Course_Institution_Name && <SubTitle  text={item.Course_Institution_Name.toLowerCase()}/>}
      {item.Course_Issued_Date && <DateRange text={item.Course_Issued_Date} />}
      </div>
      {item.Course_Summary && <p>{item.Course_Summary}</p>}
      </div>
    ))}
  </ContentSection>
);

Certificates.propTypes = {};

Certificates.defaultProps = {};
