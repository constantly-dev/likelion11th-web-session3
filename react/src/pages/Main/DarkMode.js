import '../../Main.css';
import { useState } from 'react';

const DarkMode = (props) => {
  const [imageSrc, setImageSrc] = useState(
    require('../../../src/images/moon.png')
  ); // 초기 상태는 선택이 되지 않은 상태를 나타내기 위함
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부를 state로 관리

  const handleClick = () => {
    if (isClicked) {
      setImageSrc(require('../../../src/images/moon.png'));
      setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    } else {
      setImageSrc(require('../../../src/images/sun.png'));
      setIsClicked(true); // true일 땐 변경될 이미지 src
    }
  };
  return (
    <div className="darkModeToggle">
      <a
        href="#!"
        onClick={() => {
          props.darkMode(!props.dark);
          handleClick();
        }}
      >
        <img src={imageSrc} alt="darkMode" id="darkBtn" />
      </a>
    </div>
  );
};

export default DarkMode;
