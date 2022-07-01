import React from 'react';
import { Title } from '../Title/Title';
import { Icon } from '@iconify/react';
import styles from './Contacts.module.css';
import {ContentSection} from '../ContentSection/ContentSection'

export const Contacts = ({userData}) => (
  <ContentSection>
  <div className={styles.Contacts}>
    <Title text='Contact Me' fontSize='14px' />
       {userData.Email &&   
          <div className={styles.wrapper}> 
            <span className={styles.icon}>
                <Icon icon="fluent:mail-16-filled" color='#00B884'width='6px' height='5px' />
            </span>
            <a className={styles.link} href={`mailto:${userData.Email}`}>{userData.Email}</a>
          </div>
      } 

       {userData.Phone_Number &&   
          <div className={styles.wrapper}> 
            <span className={styles.icon}>
                <Icon icon="bi:phone-fill"  color='#00B884'width='6px' height='5px' />
            </span>
            <a className={styles.link} href={`tel:${userData.Phone_Number}`}>{userData.Phone_Number}</a>
          </div>
      } 

       {userData.Date_of_Birth &&   
          <div className={styles.wrapper}> 
            <span className={styles.icon}>
                <Icon  icon="bxs:calendar"  color='#00B884'width='6px' height='5px' />
            </span>
            <span className={styles.link}>{userData.Date_of_Birth}</span>
          </div>
      } 
       {userData.Address &&   
          <div className={styles.wrapper}> 
            <span className={styles.icon}>
                <Icon  icon="fa6-solid:location-dot"  color='#00B884'width='6px' height='5px' />
            </span>
            <span className={styles.link}>{userData.Address.toLowerCase()}</span>
          </div>
      } 
       {userData.Social_Profiles &&   
          <div className={styles.wrapper}> 
            <span className={styles.icon}>
                <Icon  icon="bxl:linkedin"  color='#00B884'width='6px' height='5px' />
            </span>
            <span className={styles.link} href={userData.Social_Profiles}>{userData.Name}</span>
          </div>
      } 
  </div>
  </ContentSection>
);

Contacts.propTypes = {};

Contacts.defaultProps = {};
