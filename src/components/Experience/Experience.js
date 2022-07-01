import React from 'react';
import styles from './Experience.module.css';
import { SubTitle } from '../SubTitle/SubTitle';
import { DateRange } from '../DateRange/DateRange';
import data from '../../cv_example.json'
import { Title } from '../Title/Title';
import { ContentSection } from '../ContentSection/ContentSection';


export const Experience = () => (
  <ContentSection>
  <Title text='Work Experience' fontSize='15px' />
      {Object.values(data.experience).map((item, index) => {
        return (
          <div key={index} className={styles.Experience}>
            <div className={styles.box}>
              <SubTitle text={item.Job_Title.toLowerCase()} fontSize='13px' />
              <DateRange text={item.Job_Location} />
            </div>
            <div className={styles.box}>
              <SubTitle text={item.Company_Name.toLowerCase()} fontSize='13px' />
              <DateRange text={item.Job_Start_Date} />
              <DateRange text={item.Job_End_Date} />
            </div>
            {item.Job_Duties && <p className={styles.text}><span className={styles.disc}></span>{item.Job_Duties}</p>}
         </div>
        )
      }
     )}
     </ContentSection>
);

Experience.propTypes = {};

Experience.defaultProps = {};
