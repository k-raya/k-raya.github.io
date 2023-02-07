import React from 'react'
import { IconContext } from 'react-icons';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Tall from './images/tall.png';

export default function Home({ toggled, onClick }) {
    return (

        <div className="animate__animated animate__bounceIn">
            <div className="intro-container">
                <img src={Tall} alt='profile-pic' className="profile-pic" />
                <div id="greeting">Hey, I'm Kevin!</div>
                <div id="text">
                    I'm a Full Stack Software Engineer.
                    <br /> When I'm not studying you can catch me sketching or
                    daydreaming.
                </div>
                <div className="social-icons">
                    <Link to='https://github.com/k-raya' id='git-icon'><IconContext.Provider value={{ size: '50px' }}> <AiFillGithub /></IconContext.Provider></Link>
                    <Link to='https://www.linkedin.com/in/kev-raya/' id='linkedin-icon'><IconContext.Provider value={{ size: '50px' }}><AiFillLinkedin /></IconContext.Provider></Link>
                    <Link to='https://twitter.com/SmallTall_' id='twitter-icon'><IconContext.Provider value={{ size: '50px' }}><AiFillTwitterCircle /></IconContext.Provider></Link>
                </div>
            </div>
            <div>{/* <!--empty for now--> */}</div>
        </div>

    )
}
