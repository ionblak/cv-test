import React, { useState } from 'react';
import styles from './Pages.module.css';
import { Page1 } from '../Page1/Page1';
const sidebarStructure = [
{field:'photo'},
{field:'contact'},
{field:'skills'},
{field:'languages'}, 
{field:'hobbies'},
{field:'qrcode'},
{field:'reference'}
]

const contentStructure = [
  {field:'main'},
  {field:'education'},
  {field:'experience'},
  {field:'internship'}, 
  {field:'volunteering'},
  {field:'certificates'},
  {field:'projects'},
  {field:'avards'},
  {field:'groups'},
  ]
//a4 page height = 1300
export const Pages = () => {

    const [pageIndices,setPageIndices] = useState([{
      sidebar:{
        start: 0,
        end :sidebarStructure.length,
      },
      content:{
        start: 0,
        end :contentStructure.length
      }
  }])


  const onOverflow =(type, pageIndex)=> (visibleItems)=>{
    const lastStart = pageIndices[pageIndex][type].start
    const newState = [ ...pageIndices]
    newState[pageIndex] = {...newState[pageIndex], [type]:{start: lastStart, end: lastStart + visibleItems}}
     newState[pageIndex + 1] = {
      ...(newState[pageIndex + 1] || {}), 
      [type]:{
        start: lastStart+visibleItems, 
        end:pageIndices[pageIndex][type].end
    }
    }

  
  setPageIndices(newState)
    
  }

  return (
    <div className={styles.Pages}>
    {pageIndices.map((item,index)=> {
      const pageSidebarStructure = item.sidebar ? sidebarStructure.slice(item.sidebar.start, item.sidebar.end) : []
      const pageContentStructure = item.content ? contentStructure.slice(item.content.start, item.content.end) : []
      return <Page1 
        key={index} 
        contentStructure={pageContentStructure} 
        sidebarStructure={pageSidebarStructure} 
        onSidebarOverflow={onOverflow('sidebar', index)} 
        onContentOverflow={onOverflow('content', index)} 
        />
    })  }
    </div>
  )
};

Pages.propTypes = {};

Pages.defaultProps = {};
