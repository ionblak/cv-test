import React from 'react';
import styles from './Title.module.css';

export const Title = ({text,fontSize}) => (
  <h1 style={{fontSize}} className={styles.Title}>
    {text}
  </h1>
);

Title.propTypes = {};

Title.defaultProps = {
  fontSize:'15px'
};

