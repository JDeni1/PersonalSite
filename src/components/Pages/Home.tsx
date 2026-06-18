import { contactInfo } from '../Contacts/ContactData';
import { Contact } from '../Contacts/Contacts';
import { HomeIntroData } from '../Intro/IntroData';
import { Intro } from '../Intro/Intro';
import AboutSection from './AboutSection';
import TimeLine from '../TimeLine/TimeLine';

export const Home = () => {
  return (
    <>
     <div id="home">
        <div className = "WelcomeIntro">
          {HomeIntroData.map((intro) => ( 
            <Intro key={intro.id} intro={intro} />
          ))}
        </div>

        <div className="contacts-section">
          <div className="contacts-grid">
            {contactInfo.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>

     <TimeLine />

      <div id="about" className="aboutSection">
        <AboutSection />
      </div>
    </>
  )
}
