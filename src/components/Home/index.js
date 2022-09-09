import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Group 11logo.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'a', 'b', 'i', 't', 'r', 'a', ' ', 'B', 'e', 'r', 'a', '.'];
    const jobArray = ['A', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>    
                <br />
                <span className={`${letterClass} _14`}>I</span> 
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16`}>m</span> 
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx= {15} />
                <br/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx= {22} />
                <br />
                </h1>
                <h2>Web Developer / Freelance UI Designer / Photographer</h2>
                <a className='flat-button'
                target="_blank" 
                rel="norefferer" 
                href="https://docs.google.com/document/d/1X5F_yIqGm1e3KjiAB3vzhvDTgbjlCvDsvSLPNpeJgv4/edit#heading=h.x8fm1uorkbaw">RESUME
                </a>
                <Link to="" className=''></Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home;