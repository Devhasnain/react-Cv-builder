import React, { forwardRef, useContext } from 'react';
import { Context } from '../Context/Context';
const CV = forwardRef((props, ref) => {
    const {
        profile,
        educationArr,
        WorkExperienceArr,
        Skills,
        ProjectsArr,
        LanguagesArr,
        InterestsArr,
        Summary
    } = useContext(Context);
    return (
        <>
            <div ref={ref} style={{fontFamily:" 'Roboto', sans-serif",letterSpacing:"1px"}} className='container text-start border p-4'>
                <div className='row'>
                    <h4 className='p-0'>{profile.name ? profile.name : 'Your Name'}</h4>
                    <small className='text-muted p-0'>{profile.address ? profile.address : "Address"}</small>
                    <small className='text-primary p-0'>{profile.email ? profile.email : "email@gmail.com"}</small>
                    <small className='text-muted p-0'>{profile.number ? profile.number : "phone number"}</small>
                </div><br />
                {(WorkExperienceArr.length > 0) ? <div className='row'>
                    <h4 className='text-muted p-0'>Work Experience</h4>
                    <hr style={{ padding: "1px" }} />
                    {(WorkExperienceArr.length > 0) ? WorkExperienceArr.map((item, index) => {
                        return (
                            <>
                                <h4 className='p-0 fw-bold'>{item.position ? item.position : "Job title"}</h4>
                                <small className='text-muted p-0'>{item.company} - {item.city}</small>
                                <small className='text-muted p-0'>{item.startDate} to {item.endDate}</small>
                                <small className='text-muted p-0'>Url:{item.url}</small>
                                <br />
                                <br />
                            </>
                        )
                    }) : "Your employment history"}
                </div> : ""}
                {(educationArr.length > 0) ? <div className='row'>
                    <h4 className='text-muted p-0'>Education</h4>
                    <hr style={{ padding: "1px" }} />
                    {(educationArr.length > 0) ? educationArr.map((item, index) => {
                        return (
                            <>
                                <h4 className='p-0 fw-bold'>{item.degree ? item.degree : "Job title"}</h4>
                                <small className='text-muted p-0'>{item.institute} - {item.city}</small>
                                <small className='text-muted p-0'>{item.startDate} to {item.endDate}</small>
                                <br />
                                <br />
                            </>
                        )
                    }) : "Your education"}
                </div> : ""}
                <div className='row'>
                    {(Skills.length > 0) ? <div className='col'>
                        <h4 className='text-muted p-0'>Skills</h4>
                        <hr style={{ padding: "1px" }} />
                        <ul className='p-1'>
                            {(Skills.length > 0) ? Skills.map((item, index) => {
                                return (
                                    <>
                                        <li className='p-0'>{item}</li>
                                    </>
                                )
                            }) : "Your Skills"}
                        </ul>
                    </div> : ""}
                    {(LanguagesArr.length > 0) ? <div className='col'>
                        <h4 className='text-muted p-0'>Language</h4>
                        <hr style={{ padding: "1px" }} />
                        <ul className='p-1'>
                            {(LanguagesArr.length > 0) ? LanguagesArr.map((item, index) => {
                                return (
                                    <>
                                        <li className='p-0'>{item}</li>
                                    </>
                                )
                            }) : "Languages"}
                        </ul>
                    </div> : ""}
                </div>
                <div className='row'>
                    {(ProjectsArr.length > 0) ? <div className='col'>
                        <h4 className='text-muted p-0'>Projects</h4>
                        <hr style={{ padding: "1px" }} />
                        <ul className='p-1'>
                            {(ProjectsArr.length > 0) ? ProjectsArr.map((item, index) => {
                                return (
                                    <>
                                        <li className='p-0'>{item.title}</li>
                                        <small className='text-primary'>{item.link}</small>
                                    </>
                                )
                            }) : "Projects"}
                        </ul>
                    </div> : ""}
                    {(InterestsArr.length > 0) ? <div className='col'>
                        <h4 className='text-muted p-0'>Interests</h4>
                        <hr style={{ padding: "1px" }} />
                        <ul className='p-1'>
                            {(InterestsArr.length > 0) ? InterestsArr.map((item, index) => {
                                return (
                                    <>
                                        <li className='p-0'>{item}</li>
                                    </>
                                )
                            }) : "Your Interests"}
                        </ul>
                    </div> : ""}
                </div>
                {(Summary !== '') ? <div className='row'>
                    <h4 className='p-0 text-muted'>Summary</h4>
                    <hr style={{ padding: "1px" }} />
                    <p className='p-0'>{Summary ? Summary : ""}</p>
                </div> : ""}
            </div>
        </>
    )
});

export default CV;