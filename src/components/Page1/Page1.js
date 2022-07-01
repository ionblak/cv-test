import React, { useEffect, useRef, useState } from 'react';
import { Section } from '../Section/Section';
import styles from './Page1.module.css';


export const Page1 = ({sidebarStructure,onContentOverflow, onSidebarOverflow,contentStructure}) => {


  return (
    <div className={styles.page}>
    <OverflowBlock 
    className={styles.sidebar} 
    onOverflow={onSidebarOverflow} 
    structure={sidebarStructure} />
    <OverflowBlock 
    className={styles.content} 
    onOverflow={onContentOverflow} 
    structure={contentStructure} />
  </div>
    )
};
//     
//     <ContentSection>
//       
//     </ContentSection>
//     <ContentSection>
//       
//     </ContentSection>
//     <ContentSection>
//       <Title text='References' fontSize='14px' />
//     </ContentSection>
//   </div>
//   <div>

//     
// );

 const OverflowBlock = ({ structure, onOverflow, className}) => {
  const wrapper = useRef()
  const [visibleItems, setVisibleItems] = useState(structure.length)
  const isFitingMode = useRef(false)

  useEffect(()=>{
    setVisibleItems(structure.length)
  }, [structure])
  
    useEffect(()=>{
      const el = wrapper.current
      const curOverflow = el.style.overflow;
  
      if ( !curOverflow || curOverflow === "visible" )
         el.style.overflow = "hidden";
   
      const isOverflowing = el.clientWidth < el.scrollWidth 
      || el.clientHeight < el.scrollHeight;
      
      el.style.overflow = curOverflow;

      if(isOverflowing && visibleItems > 1){
        isFitingMode.current = true
  
        setVisibleItems(visibleItems -1)
        
      }else if(isFitingMode.current){
        isFitingMode.current = false
        onOverflow(visibleItems)
          
      }
      
    },[onOverflow, visibleItems,structure])
  
  
    return (
      <div className={className}  ref={wrapper}>
        {structure.slice(0,visibleItems).map((item)=>
         <Section key={item.field} section={item} />)}
      </div>
      )
  };

Page1.propTypes = {};

Page1.defaultProps = {};
