import '../Main.css';

import HobbyList from './HobbyList';
import Info from './Info';
import SpecialList from './SpecialList';
import DarkMode from './DarkMode';

import Data from './Data.json';

import { useState } from 'react';

const Main = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      <div className={isDark ? 'darkMode' : ''}>
        <DarkMode darkMode={setIsDark} dark={isDark}></DarkMode>
        <Info data={Data} dark={isDark} />
        <HobbyList data={Data} dark={isDark} />
        <SpecialList data={Data} dark={isDark} />
      </div>
    </>
  );
};

export default Main;
