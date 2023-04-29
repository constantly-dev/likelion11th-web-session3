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
import { useState, useEffect } from 'react';
import DarkMode from './DarkMode';
import Login from './Login';
import './Login.css';
import { UserInfo } from './UserInfo';

const Main = () => {
  useEffect(() => {
    localStorage.setItem('id', UserInfo.id);
    localStorage.setItem('password', UserInfo.password);
  }, []);
  const [isDark, setIsDark] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const LoginChange = () => {
    setIsLogin(true);
    console.log('ggd');
    if (isLogin) {
      localStorage.setItem('stay', true);
    }
  };

  return localStorage.getItem('stay') ? (
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
  ) : (
    <Login login={LoginChange}></Login>
  );
};

export default Main;
