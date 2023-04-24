import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')



  return (
    <>
      <div className="container about-page">
        <div className="about">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'O', 'u','r','','D','a','t','a','b','a','s','e']}
              idx={20}
            />
          </h1>
          <p>
          Gun violence has affected millions of Americans from all walks of life, young and old, throughout the years. Unfortunately, the growing number of occurrences has only solidified the importance and relevance of the topic for many people. This epidemic of widespread, relentless violence weighs heavily on the minds of many, manifesting itself in fear, depression, and behaviors of isolation out of the possibility of mass shootings. With numerous approaches and solutions to consider, the consolidation and presentation of relevant data may provide insight into addressing gun violence.
The development of a database and respective web application will give users the ability to visualize and compare the numerous factors of gun violence between states, cities, and other attributes such as the number of incidents resulting in death or only wounds. The power of analysis is complemented by the ease-of-use for any and all users; intuitive queries let one spend more time acquiring and observing data presented in clear and concise data formats. This goal is achieved via front-end use of React and the back-end of Oracle DBMS. The combination of vast, trusted data with powerful analytical tools bundled in a user-friendly interface will serve to facilitate innovative, effective solutions to a problem that looms over the American public.

          </p>
         
        
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About