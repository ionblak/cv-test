import React from 'react';
import PropTypes from 'prop-types';
import styles from './SidebarlistItem.module.css';

export const SidebarlistItem = ({text}) => (
  <li className={styles.SkillsItem}>
    {text}
  </li>
);

SidebarlistItem.propTypes = {
  text:PropTypes.string
};

SidebarlistItem.defaultProps = {};
