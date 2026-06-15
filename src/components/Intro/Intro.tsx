import React from 'react'
import type { Intro as IntroType } from '../../Types';
import './Intro.css';

interface WelcomeIntro {
  intro: IntroType;
}

export const Intro = ({ intro }: WelcomeIntro) => {
  return (
    <div className = "containerIntro">
      <div className = "IntroText">
        <h1 className = "IntroTitle">{intro.title}</h1>
        <p className = "IntroDescription"> {intro.description}</p>
      </div>
      <div className = "IntroImage">
        <img src={intro.image}  className = "IntroImg"/>
      </div>
    </div>
  )
}
