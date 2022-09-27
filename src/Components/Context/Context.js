import React, { createContext, useState } from 'react';
export const Context = createContext();
export const DataProvider = (props) => {
  const [open, setOpen] = useState({ value: false, InputType: '' });
  const [profile, setProfile] = useState({});
  const [educationArr, setEducationArr] = useState([]);
  const [WorkExperienceArr, setWorkExperienceArr] = useState([]);
  const [Skills, setSkills] = useState([]);
  const [ProjectsArr, setProjectsArr] = useState([]);
  const [LanguagesArr, setLanguagesArr] = useState([]);
  const [InterestsArr, setInterestsArr] = useState([]);
  const [Summary,setSummaryobj]=useState('');
  return (
    <Context.Provider value={
      {
        open,
        setOpen,
        profile,
        setProfile,
        educationArr,
        setEducationArr,
        WorkExperienceArr,
        setWorkExperienceArr,
        Skills,
        setSkills,
        ProjectsArr,
        setProjectsArr,
        LanguagesArr,
        setLanguagesArr,
        InterestsArr,
        setInterestsArr,
        Summary,
        setSummaryobj
      }
    }>
      {props.children}
    </Context.Provider>
  );
};