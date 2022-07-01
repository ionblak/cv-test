import React from 'react';
import PropTypes from 'prop-types';
import { Contacts } from '../Contacts/Contacts';
import { Sidebarlist } from '../Sidebarlist/Sidebarlist'
import { Experience } from '../Experience/Experience'
import { Projects } from '../Projects/Projects'
import { Main } from '../Main/Main'
import { Certificates } from '../Certificates/Certificates'
import cv from '../../cv_example.json'


const SECTIONS = {
  photo: <div>photo</div>,
  contact: <Contacts userData={cv.personal}  />,
  skills: <Sidebarlist title='Skills' list={cv.skills} />,
  languages:<div>languages</div>,
  hobbies: <Sidebarlist title='Hobbies' list={[cv.hobbies.Hobby]} />,
  qrcode:<div>qrcode</div>,
  reference: <div>reference</div>,
  main: <Main text={cv.objective.Objective} 
            name={cv.personal.Name} 
            title={cv.hidden.main_title} />,
  education: <div>education</div>,
  experience: <Experience />,
  internship: <div>internship</div>,
  volunteering: <div>volunteering</div>,
  certificates: !!Object.values(cv.certifications).length  &&
   <Certificates certifications={cv.certifications} />,
  projects: !!Object.values(cv.projects).length &&
    <Projects projects={Object.values(cv.projects)} />,
  avards: <div>avards</div>,
  groups: <div>groups</div>,
}

export const Section = ({section}) => {
  return SECTIONS[section.field]
}

Section.propTypes = {
  section:PropTypes.objectOf({field:PropTypes.string})
};

