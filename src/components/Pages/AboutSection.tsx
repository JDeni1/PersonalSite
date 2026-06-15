import React from 'react'
import { Intro } from '../Intro/Intro'
import { AboutIntroData } from '../Intro/IntroData'

const AboutSection = () => {
  return (
    <>      
      <div className = "WelcomeIntro">
        {AboutIntroData.map((intro) => ( 
          <Intro key={intro.id} intro={intro} />
       ))}
     </div>
    </>
  )
}

export default AboutSection