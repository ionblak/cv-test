import React from 'react';
import styles from './Description.module.css';

export const Description = ({text}) => (
  <div className={styles.Description}>
    {text}
  </div>
);

Description.propTypes = {};

Description.defaultProps = {};

 
