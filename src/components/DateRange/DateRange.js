import React from 'react';
import styles from './DateRange.module.css';

export const DateRange = ({text}) => (
  <div className={styles.DateRange}>
      {text}
  </div>
);

DateRange.propTypes = {};

DateRange.defaultProps = {};
