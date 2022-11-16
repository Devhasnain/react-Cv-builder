import React, { useContext, useState } from 'react';
import Container from '@mui/material/Container';
import { Button, Input } from '@mui/material/';
import Modal from '@mui/material/Modal';
import { Context } from '../Context/Context';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  bordrRadius: 30,
  boxShadow: 24,
  p: 4,
};

export const BasicModal = () => {
  const {
    open,
    setOpen,
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
    setSummaryobj
  } = useContext(Context);
  const [profileData, setProfileData] = useState({ name: '', work: '', email: '', number: '', address: '' });
  const [educationData, setEducationData] = useState({ degree: '', institute: '', startDate: '', endDate: '', city: '' });
  const [workExperience, setWorkExperience] = useState({ position: '', company: '', startDate: '', endDate: '', country: '', city: '', url: '' });
  const [skill, setSkill] = useState('');
  const [projects, setProjects] = useState({ title: '', link: '' });
  const [language, setLanguage] = useState('');
  const [interest, setInterest] = useState('');
  const [summary, setSummary] = useState('');
  const handleClose = () => setOpen({ value: false });
  //Present checkbox Handler
  const HandlePresent = (e) => {
    setEducationData((pre) => {
      return { ...pre, endDate: "present" }
    })
  };
  const HandlePresentWorkExperience = (e) => {
    setWorkExperience((pre) => {
      return { ...pre, endDate: "present" }
    });
  };
  //Form input onChange functions
  const ProfileOnchange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const EducationDataOnchange = (e) => {
    const { name, value } = e.target;
    setEducationData((prev) => {
      return { ...prev, [name]: value };
    })
  }
  const workExperienceOnChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const handleSkillsOnchange = (e) => {
    setSkill(e.target.value);
  }
  const projectsOnChange = (e) => {
    const { name, value } = e.target;
    setProjects((pre) => {
      return { ...pre, [name]: value }
    })
  }
  const languageOnChange = (e) => {
    setLanguage(e.target.value);
  }
  const interestOnChange = (e) => {
    setInterest(e.target.value);
  }
  const summaryOnChange = (e) => {
    setSummary(e.target.value)
  }
  //Form Submit Functions
  const ProfileSubmit = (e) => {
    e.preventDefault();
    setProfile(profileData);
    setProfileData({ name: '', work: '', email: '', number: '' });
    setTimeout(() => {
      setOpen(false)
    }, 300);
  };
  const EducationSubmit = (e) => {
    e.preventDefault();
    setEducationArr((e) => [...e, educationData]);
    setEducationData({ degree: '', institute: '', startDate: '', endDate: '', city: '' })
  };
  const WorkSubmit = (e) => {
    e.preventDefault();
    setWorkExperienceArr((e) => [...e, workExperience]);
    setWorkExperience({ position: '', company: '', startDate: '', endDate: '', country: '', city: '', url: '' });
  };
  const SkillSubmit = (e) => {
    e.preventDefault();
    setSkills((e) => [...e, skill]);
    setSkill('');
  };
  const ProjectSubmit = (e) => {
    e.preventDefault();
    setProjectsArr((e) => [...e, projects]);
    setProjects({ title: '', link: '' });
  };
  const LanguageSubmit = (e) => {
    e.preventDefault();
    setLanguagesArr((e) => [...e, language]);
    setLanguage('');
  };
  const InterestSubmit = (e) => {
    e.preventDefault();
    setInterestsArr((e) => [...e, interest]);
    setInterest('');
  };
  const handleSummary = (e) => {
    e.preventDefault();
    setSummaryobj(summary);
    setSummary('');
    setOpen(false)
  }
  const FillInput = (type) => {
    switch (type) {
      case 'Profile':
        return (
          <div className='row'>
            <h2>{type}</h2>
            <hr />
            <form onSubmit={ProfileSubmit}>
              <div className='col'>
                <Input name='name' placeholder='Name *' value={profileData.name} onChange={ProfileOnchange} required type='text' style={{ width: "45%" }} /><br /><br />
                <Input name='work' placeholder='What you do *' value={profileData.work} onChange={ProfileOnchange} required type='text' style={{ width: "70%" }} /><br /><br />
                <Input name='email' placeholder='Email *' value={profileData.email} onChange={ProfileOnchange} required type='email' style={{ width: "45%" }} /><br /><br />
                <Input name='number' placeholder='Number *' value={profileData.number} onChange={ProfileOnchange} required type='text' style={{ width: "45%" }} /><br /><br />
                <Input name='address' placeholder='Address *' value={profileData.address} onChange={ProfileOnchange} required type='text' style={{ width: "80%" }} /><br /><br />
              </div><br />
              <div className='text-end'><Button variant='contained' type='submit'>Done</Button></div>
            </form>
          </div>
        );
      case 'Education':
        return (
          <div className='row'>
            <div className='col'>
              <h2>{type}</h2>
              <hr />
              <form onSubmit={EducationSubmit}>
                <Input value={educationData.degree} onChange={EducationDataOnchange} name='degree' placeholder='Degree *' required type='text' style={{ width: "45%" }} /><br /><br />
                <Input value={educationData.institute} onChange={EducationDataOnchange} name='institute' placeholder='Institute *' required type='text' style={{ width: "45%" }} /><br /><br />
                <div className='d-flex justify-content-between'>
                  <div>
                    <small>From</small><br />
                    <Input value={educationData.startDate} onChange={EducationDataOnchange} name='startDate' type='date' />
                  </div>
                  <div>
                    <small>To</small><br />
                    <Input value={educationData.endDate} onChange={EducationDataOnchange} name='endDate' type='date' /><br />
                    <div className='d-flex '>
                      <Input type='checkbox' className='mx-2' name='present' onClick={HandlePresent} /><small>present</small>
                    </div>
                  </div>
                </div>
                <Input value={educationData.city} onChange={EducationDataOnchange} name='city' placeholder='City *' required type='text' style={{ width: "40%" }} />
                <div className='text-end'>
                  <Button variant='contained' type='submit'>Done</Button>
                </div>
              </form>
              <hr />
              <div className='row'>
                <div className='d-flex p-1' style={{ overflowX: "auto" }} >
                  {educationArr.map((item, index) => {
                    return (
                      <small className='text-muted mx-1 shadow d-flex' style={{ background: '#eae8e8', borderRadius: "15px", padding: '2px' }} key={index}>{item.institute.slice(0, 8)}... <span onClick={() => { setEducationArr(educationArr.filter((item, num) => { return (num !== index) })) }} style={{ cursor: "pointer" }}><ClearIcon style={{ fontSize: "17px" }} /></span></small>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      case 'Work Experience':
        return (
          <div className='row'>
            <h2>{type}</h2>
            <hr />
            <form onSubmit={WorkSubmit}>
              <div className='col'>
                <Input name='position' value={workExperience.position} onChange={workExperienceOnChange} placeholder='Position' style={{ width: "50%" }} required type='text' /><br /><br />
                <Input name='company' value={workExperience.company} onChange={workExperienceOnChange} placeholder='Company *' style={{ width: "50%" }} required type='text' /><br /><br />
                <div className='d-flex justify-content-between'>
                  <div >
                    <small>From</small><br />
                    <Input name='startDate' value={workExperience.startDate} onChange={workExperienceOnChange} type='date' required />
                  </div>
                  <div >
                    <small>To</small>
                    <br />
                    <div>
                      <Input name='endDate' value={workExperience.endDate} onChange={workExperienceOnChange} type='date' />
                      <div className='d-flex justify-content-start p-0'>
                        <Input type='checkbox' onClick={HandlePresentWorkExperience} className='mx-1' />
                        <small>present</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-between '>
                  <Input name='country' value={workExperience.country} onChange={workExperienceOnChange} placeholder='Country *' required type='text' />
                  <Input name='city' value={workExperience.city} onChange={workExperienceOnChange} placeholder='City *' required type='text' />
                </div><br />
                <Input name='url' value={workExperience.url} onChange={workExperienceOnChange} placeholder='Url *' required type='url' style={{ width: "80%" }} /><br />
                <div className='text-end' >
                  <Button variant='contained' type='submit'>Done</Button>
                </div>
                <hr />
                <div className='row'>
                  <div className='d-flex p-1' style={{ overflowX: "auto" }} >
                    {WorkExperienceArr.map((item, index) => {
                      return (
                        <small className='text-muted mx-1 shadow d-flex' style={{ background: '#eae8e8', borderRadius: "15px", padding: '2px' }} key={index}>{item.position.slice(0, 8)}... <span onClick={() => { setWorkExperienceArr(WorkExperienceArr.filter((item, num) => { return (num !== index) })) }} style={{ cursor: "pointer" }}><ClearIcon style={{ fontSize: "17px" }} /></span></small>
                      )
                    })}
                  </div>
                </div>
              </div>
            </form>
          </div>
        );
      case 'Skills':
        return (
          <div className='row'>
            <div className='col'>
              <h2>{type}</h2>
              <hr />
              <small className='text-muted'>add maximum five skills.</small><br /><br />
              <form onSubmit={SkillSubmit}>
                <div className='col'>
                  <div className='d-flex align-items-top justify-content-evenly'>
                    <Input value={skill} onChange={handleSkillsOnchange} placeholder='Skill *' style={{ width: "70%" }} required type='text' />
                    <button type='submit' style={{ border: "none", outline: "none" }} className='btn btn-sm btn-primary mx-3'>
                      Add
                    </button>
                  </div><br />
                </div>
              </form>
              <hr />
            </div>
            <div className='row'>
              <div className='d-flex p-1' style={{ overflowX: "auto" }} >
                {Skills.map((item, index) => {
                  return (
                    <small className='text-muted mx-1 shadow d-flex' style={{ background: '#eae8e8', borderRadius: "15px", padding: '2px' }} key={index}>{item} <span onClick={() => { setSkills(Skills.filter((item, num) => { return (num !== index) })) }} style={{ cursor: "pointer" }}><ClearIcon style={{ fontSize: "17px" }} /></span></small>
                  )
                })}
              </div>
            </div><br />
          </div>
        );
      case 'Projects':
        return (
          <div className='row'>
            <h2>{type}</h2>
            <hr />
            <small className='text-muted'>Add some projects you have created.</small><br />
            <form onSubmit={ProjectSubmit}>
              <div className='col'>
                <Input value={projects.title} onChange={projectsOnChange} name='title' placeholder='Title *' style={{ width: "45%" }} required type='text' /><br /><br />
                <Input value={projects.link} onChange={projectsOnChange} name='link' placeholder='Link *' style={{ width: "60%" }} required type='url' /><br /><br />
                <div className='text-end'>
                  <Button variant='contained' type='submit'>Add</Button>
                </div>
                <hr />
                <div className='row'>
                  <div className='d-flex p-1' style={{ overflowX: "auto" }} >
                    {ProjectsArr.map((item, index) => {
                      return (
                        <small className='text-muted mx-1 shadow d-flex' style={{ background: '#eae8e8', borderRadius: "15px", padding: '2px' }} key={index}>{item.link.slice(0, 10)}... <span onClick={() => { setProjectsArr(ProjectsArr.filter((item, num) => { return (num !== index) })) }} style={{ cursor: "pointer" }}><ClearIcon style={{ fontSize: "17px" }} /></span></small>
                      )
                    })}
                  </div>
                </div><br />
              </div>
            </form>
          </div>
        );
      case 'Languages':
        return (
          <div className='row'>
            <h2>{type}</h2>
            <hr />
            <small className='text-muted'>Add languages you can speak.</small><br /><br />
            <form onSubmit={LanguageSubmit}>
              <div className='col'>
                <div className='d-flex justify-content-evenly align-items-center'>
                  <Input placeholder='Language *' value={language} onChange={languageOnChange} style={{ width: "70%" }} required type='text' />
                  <button className='btn btn-sm btn-primary' type='submit'>Add</button>
                </div><br />
                <hr />
                <div className='row'>
                  <div className='d-flex p-1' style={{ overflowX: "auto" }} >
                    {LanguagesArr.map((item, index) => {
                      return (
                        <small className='text-muted mx-1 shadow d-flex' style={{ background: '#eae8e8', borderRadius: "15px", padding: '2px' }} key={index}>{item}<span onClick={() => { setLanguagesArr(LanguagesArr.filter((item, num) => { return (num !== index) })) }} style={{ cursor: "pointer" }}><ClearIcon style={{ fontSize: "17px" }} /></span></small>
                      )
                    })}
                  </div>
                </div><br />
              </div>
            </form>
          </div>
        );
      case 'Interests':
        return (
          <div className='row'>
            <h2>{type}</h2>
            <hr />
            <form onSubmit={InterestSubmit}>
              <div className='col'>
                <div className='d-flex justify-content-evenly align-items-center'>
                  <Input placeholder='Interest *' value={interest} onChange={interestOnChange} style={{ width: "70%" }} required type='text' />
                  <button className='btn btn-sm btn-primary' type='submit'>Add</button>
                </div><br />
                <hr />
                <div className='row'>
                  <div className='d-flex p-1' style={{ overflowX: "auto" }} >
                    {InterestsArr.map((item, index) => {
                      return (
                        <small className='text-muted mx-1 shadow d-flex' style={{ background: '#eae8e8', borderRadius: "15px", padding: '2px' }} key={index}>{item} <span onClick={() => { setInterestsArr(InterestsArr.filter((item, num) => { return (num !== index) })) }} style={{ cursor: "pointer" }}><ClearIcon style={{ fontSize: "17px" }} /></span></small>
                      )
                    })}
                  </div>
                </div><br />
              </div>
            </form>
          </div>
        );
      case 'Summary':
        return (
          <div className='row'>
            <h2>{type}</h2>
            <hr />
            <form onSubmit={handleSummary}>
              <div className='col'>
                <textarea rows={8} maxLength={200} value={summary} onChange={summaryOnChange} placeholder='Summary' className='form-control' required minLength={60} /><br />
                <div className='text-end'>
                  <Button variant='contained' type='submit'>Add</Button>
                </div>
              </div>
            </form>
          </div>
        );
      case 'Others':
        return (
          <div className='row'>
            <h2>{type}</h2>
            <hr />
            <form onSubmit={handleSummary}>
              <div className='col'>
                <Input placeholder='Title' />
                <textarea placeholder='Description' rows={4} className='form-control' />
                <div className='d-flex justify-content-between'>
                  <div >
                    <small>From</small><br />
                    <Input name='startDate' value={workExperience.startDate} onChange={workExperienceOnChange} type='date' required />
                  </div>
                  <div >
                    <small>To</small>
                    <br />
                    <div>
                      <Input name='endDate' value={workExperience.endDate} onChange={workExperienceOnChange} type='date' />
                      <div className='d-flex justify-content-start p-0'>
                        <Input type='checkbox' onClick={HandlePresentWorkExperience} className='mx-1' />
                        <small>present</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-end'>
                  <Button variant='contained' type='submit'>Add</Button>
                </div>
              </div>
            </form>
          </div>
        );
      default:

        break;
    }
  }
  return (
    <>
      <Modal
        open={open.value}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="sm" sx={style} style={{ borderRadius: '5px' }}>
          {FillInput(open.InputType)}
        </Container>
      </Modal>
    </>
  );
};