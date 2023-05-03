import { useContext } from 'react';
import '../../../Main.css';
import { DarkContext } from '../ExtraData/DarkContext';

const Screen = (props) => {
  const { isDark } = useContext(DarkContext);
  return (
    <>
      <div className="screen__container">
        <div className="bazel">
          <div className="screen__black"></div>
          <div className="screen__white"></div>
          <div className={props.isDark ? 'window1_dark' : 'window1'}>
            <div className="window1__header">
              <div className="round round1-1"></div>
              <div className="round round1-2"></div>
              <div className="round round1-3"></div>
            </div>
            <div className="window1__body">
              <div>
                <div className="my bluetext1">처음부터</div>
                <div className={isDark ? 'my graytext1_dark' : 'my graytext1'}>
                  끝까지
                </div>
              </div>
              <div>
                <div className={isDark ? 'my graytext2_dark' : 'my graytext2'}>
                  처음부터
                </div>
                <div className="my bluetext2">끝까지</div>
              </div>
              <p className="my__last">
                열정을 다하는 <span id="developer">개발자(?) 이진혁</span>
                입니다
              </p>
              <img
                src={require('../../../../src/images/cursor.png')}
                alt="pointer"
                id="pointer"
              />
            </div>
          </div>
          <div className="menu">
            <img
              src={require('../../../../src/images/app.png')}
              alt="app-icon"
              className="menu__icon"
              id="app"
            />
            <img
              src={require('../../../../src/images/setting.png')}
              alt="setting-icon"
              className="menu__icon"
              id="setting"
            />
            <img
              src={require('../../../../src/images/mutsalogo.png')}
              alt="likelion-icon"
              className="menu__icon"
              id="likelion2"
            />
            <img
              src={require('../../../../src/images/compass.png')}
              alt="compass-icon"
              className="menu__icon"
              id="compass"
            />
            <img
              src={require('../../../../src/images/face.png')}
              alt="face-icon"
              className="menu__icon"
              id="face"
            />
          </div>
          <img
            src={require('../../../../src/images/applelogo.png')}
            alt="애플"
            id="applelogo"
          />
        </div>
        <div className="background"></div>
      </div>
    </>
  );
};

export default Screen;
