import React from 'react';
import { Title } from '../Title/Title';
import styles from './Sidebarlist.module.css';
import { SidebarlistItem } from '../SidebarlistItem/SidebarlistItem';

 export const Sidebarlist = ({title,list}) => (
  <div className={styles.Skills}>
    <Title text={title} fontSize='14px' /> 
    <ul className={styles.skillsList}>
      {list.map(item=> <SidebarlistItem key={item} text={item}/>)}
    </ul>
  </div>
);

Sidebarlist.propTypes = {};

Sidebarlist.defaultProps = {
  title: '',
  list: []
};
