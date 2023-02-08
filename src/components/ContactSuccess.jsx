import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons';

export default function ContactSuccess() {
    return (
        <div id='contact_success'><FaRegCheckCircle size="180" className='animate__animated animate__tada' />
            <h1 className='animate__animated animate__fadeIn'>Submitted!</h1> <h2 className='animate__animated animate__fadeIn'>I will reach out to you as soon as possible!</h2>
            <small className='animate__animated animate__fadeIn'> in the mean time make sure to check out my socials</small>
            <div className="social-icons-success">
                <Link to='https://github.com/k-raya' id='git-icon'><IconContext.Provider value={{ size: '50px' }}> <AiFillGithub /></IconContext.Provider></Link>
                <Link to='https://www.linkedin.com/in/kev-raya/' id='linkedin-icon'><IconContext.Provider value={{ size: '50px' }}><AiFillLinkedin /></IconContext.Provider></Link>
                <Link to='https://twitter.com/SmallTall_' id='twitter-icon'><IconContext.Provider value={{ size: '50px' }}><AiFillTwitterCircle /></IconContext.Provider></Link>
            </div>
        </div>
    )
}
