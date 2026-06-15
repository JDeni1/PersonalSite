import React from 'react'
import type { Intro as IntroType } from '../../Types';
// import './Intro.css';

interface WelcomeIntro {
  intro: IntroType;
}

export const Intro = ({ intro }: WelcomeIntro) => {
  return (
    <div className = "containerIntro">
      <h1 className = "IntroTitle">{intro.title}</h1>
      <p className = "IntroDescription"> {intro.description}</p>
      <div className = "IntroImage">
        <img src={intro.image} />
      </div>
    </div>
  )
}
