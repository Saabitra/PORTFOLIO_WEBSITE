import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faApple, faCss3, faGitAlt, faHtml5, faJs, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    An aspiring full-stack web developer with great communication and leadership qualities. I'm currently working on a few projects, including a full-stack web application that allows users to search for a place and in return it gives back what is the best time to visit the place and the sightseeings. I'm also working on a Java application that allows users to track and get back what Durga Puja pandals are near them and also locate them in map. I'm looking for new opportunities to learn and grow as a developer.
                </p>
                <p>
                    I'm an innovative thinker, a problem solver, and an initiative taker. Also I'm a multi-tasker as well with exceptional logical thinking and analytical skills. I'm a team player and a good communicator. I'm a fast learner and a quick adapter. I'm a self-motivated person and a hard worker. I'm a good listener and a good observer. I'm a good planner and a good time manager. I'm a good decision maker and a good problem solver. I'm a good leader and a good follower. I'm a good team player and a good individual worker.
                </p>
                <p>
                    I've done my CBSE class 10 schooling from Narayana School, Kolkata in 2016-17, and passed with a percentage of 93.4%. Done my CSBE class 12 schooling from Aditya Academy Secondary, Kolkata in 2018-19, and passed with a percentage of 74.5%. Currently, I'm doing my Bachelors degree in Technology in Computer Science and Technology from University of Engineering and Management, Kolkata in 2020-24.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4828" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                    </div>
                </div>
            </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About