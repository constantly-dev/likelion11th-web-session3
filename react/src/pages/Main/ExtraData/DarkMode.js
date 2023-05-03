import '../../../Main.css';
import { useContext, useState } from 'react';
import { DarkContext } from './DarkContext';

const DarkMode = () => {
  const [imageSrc, setImageSrc] = useState(
    require('../../../../src/images/moon.png')
  ); // 초기 상태는 선택이 되지 않은 상태를 나타내기 위함
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부를 state로 관리

  const handleClick = () => {
    if (isClicked) {
      setImageSrc(require('../../../../src/images/moon.png'));
      setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    } else {
      setImageSrc(require('../../../../src/images/sun.png'));
      setIsClicked(true); // true일 땐 변경될 이미지 src
    }
  };
  const { isDark, setIsDark } = useContext(DarkContext);
  console.log(isDark, setIsDark);
  return (
    <div className="darkModeToggle">
      <a
        href="#!"
        onClick={() => {
          setIsDark(!isDark);
          handleClick();
        }}
      >
        <img src={imageSrc} alt="darkMode" id="darkBtn" />
      </a>
    </div>
  );
};

export default DarkMode;
