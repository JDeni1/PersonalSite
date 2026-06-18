import React from 'react'
import { Intro } from '../Intro/Intro'
import { AboutIntroData } from '../Intro/IntroData'
import HobbiesGallery from '../HobbiesGallery/HobbiesGallery'

const AboutSection = () => {
  return (
    <>      
      <div className = "WelcomeIntro">
        {AboutIntroData.map((intro) => ( 
          <Intro key={intro.id} intro={intro} />
       ))}
     </div>

     <HobbiesGallery />
    </>
  )
}

export default AboutSection