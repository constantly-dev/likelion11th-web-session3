import '../../Main.css';

const About = (props) => {
  return (
    <>
      <div className="about__container" id="go__about">
        <div className="abouttag1">
          {'<'} about {'>'}
        </div>
        <div className={props.isDark ? 'window2__dark' : 'window2'}>
          <div className="window2__header">
            <div className="rounds2">
              <div className="round round2-1"></div>
              <div className="round round2-2"></div>
              <div className="round round2-3"></div>
            </div>
          </div>
          <div className="window2__body">
            <img
              src={require('../../../src/images/ME.jpg')}
              alt="jinhyeok"
              id="me"
            />
            <div className="profile__wrapper">
              <div className="profile">
                <span>프로필🦁</span>
              </div>
              <ol className="profile__list">
                <li id="name">이름 : 이진혁</li>
                <li id="age">나이 : 23세</li>
                <li id="major">학과 : 전자공학과</li>
                <li id="personality">
                  성격 : 처음에는 말이 많이 없어서 소심해
                  <br />
                  보이지만 친해지면 말 많아짐.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="abouttag2">
          <about />
        </div>
      </div>
    </>
  );
};

export default About;
