import React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../css/Main.css';
import Img from '../Media/bg.jpeg';
import Img1 from '../Media/bg1.jpeg';
import Img2 from '../Media/bg2.jpeg';

function Home() {
    const Arr = [Img, Img1, Img2];
    return (
        <div className='container-fluid main-div-home p-0 align-items-center d-flex' >
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 m-auto text-center'>
                        <h1 className='fs-1'>CV builder</h1>
                        <p className=''>Make a great first impression and land the interview with our collection of attractive and functional CV templates that can be modified to suit any position.</p>
                        <div className='row d-flex'>
                            {Arr.map((item, index) => {
                                return (
                                    <div className='col-4' key={index}>
                                        <div className="hovereffect">
                                            <img className="img-responsive rounded shadow" src={item} alt="" />
                                            <div className="overlay-content">
                                                <h2>Create CV</h2>
                                                <NavLink className="info" to='/create-cv'>Get's Start</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div><br />
                        <NavLink to='/create-cv' className='text-decoration-none text-light '><Button variant='contained' >create My CV</Button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
