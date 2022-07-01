import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubTitle.module.css';

export const SubTitle = ({text, fontSize}) => (
  <p style={{fontSize}} className={styles.SubTitle}>
    {text}
  </p>
);

SubTitle.propTypes = {
  text:PropTypes.string,
  fontSize: PropTypes.string
};

SubTitle.defaultProps = {
  fontSize: '13px'
};

 
