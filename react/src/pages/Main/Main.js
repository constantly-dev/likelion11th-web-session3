import '../../Main.css';
import Upfix from './FooterPart/Upfix';
import Header from './AboutPart/Header';
import Topcontainer from './AboutPart/Topcontainer';
import Mbti from './AboutPart/Mbti';
import HobbyUp from './Hobbypart/HobbyUp';
import HobbyUnder from './Hobbypart/HobbyUnder';
import Data from '../../Data.json';
import SkillWrapper from './SkillPart/SkillWrapper';
import PassionWrapper from './PassionPart/PassionWrapper';
import QuestionContainer from './PassionPart/QuestionContainer';
import Footer from './FooterPart/Footer';
import { useState, useEffect } from 'react';
import DarkMode from './ExtraData/DarkMode';
import Login from './ExtraData/Login';
import './ExtraData/Login.css';
import { UserInfo } from './ExtraData/UserInfo';
import { DarkContext } from './ExtraData/DarkContext';
const Main = () => {
  useEffect(() => {
    localStorage.setItem('id', UserInfo.id);
    localStorage.setItem('password', UserInfo.password);
  }, []);
  const [isDark, setIsDark] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const LoginChange = () => {
    setIsLogin(true);
    if (isLogin) {
      localStorage.setItem('stay', true);
    }
  };

  return localStorage.getItem('stay') ? (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? 'darkMode' : 'all__container'}>
        <DarkMode></DarkMode>
        <Header dark={isDark}></Header>
        <Upfix></Upfix>
        <Topcontainer></Topcontainer>
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
    </DarkContext.Provider>
  ) : (
    <Login login={LoginChange}></Login>
  );
};

export default Main;
