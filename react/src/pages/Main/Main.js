import '../../Main.css';
import Upfix from './Upfix';
import Header from './Header';
import Topcontainer from './Topcontainer';
import Mbti from './Mbti';
import HobbyUp from './HobbyUp';
import HobbyUnder from './HobbyUnder';
import Data from '../../Data.json';
import SkillWrapper from './SkillWrapper';
import PassionWrapper from './PassionWrapper';
import QuestionContainer from './QuestionContainer';
import Footer from './Footer';
import { useState } from 'react';
import DarkMode from './DarkMode';

const Main = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'darkMode' : 'all__container'}>
      <DarkMode darkMode={setIsDark} dark={isDark}></DarkMode>
      <Header dark={isDark}></Header>
      <Upfix></Upfix>
      <Topcontainer dark={isDark}></Topcontainer>
      <Mbti></Mbti>
      <div className={isDark ? 'hobby__container' : 'hobby__containerDark'}>
        <HobbyUp data={Data}></HobbyUp>
        <HobbyUnder data={Data}></HobbyUnder>
      </div>
      <div className="skill__container" id="go__skill">
        <SkillWrapper dark={isDark}></SkillWrapper>
      </div>
      <div className="passion__container">
        <PassionWrapper dark={isDark}></PassionWrapper>
        <QuestionContainer dark={isDark}></QuestionContainer>
        <Footer dark={isDark}></Footer>
      </div>
    </div>
  );
};

export default Main;
