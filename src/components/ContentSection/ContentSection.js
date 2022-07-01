import React from 'react';
import styles from './ContentSection.module.css';

export const ContentSection = ({children}) => (
  <div id='content' className={styles.ContentSection}>
    {children}
  </div>
);

ContentSection.propTypes = {};

ContentSection.defaultProps = {};
