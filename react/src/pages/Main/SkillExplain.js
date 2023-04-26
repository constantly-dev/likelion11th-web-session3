import '../../Main.css';

const SkillExplain = () => {
  return (
    <div className="skill__item skill__item4">
      <div className="langBox">
        <span className="langName">HTML과 CSS</span> : 아직 기본적인 지식만 알고
        활용도가 많이 부족해 <br />
        코드도 클린하게 작성하지 못하지만, 저의 코드의 문제점을 계속해서
        관찰하고 고치려고 노력 중입니다.
      </div>
      <div className="langBox">
        <span className="langName">javascript</span> : dom으로 HTML/CSS를 연결해
        함수로 간단한 조작정도만 가능해서, 원하는 여러 동작들이 포함된 웹 제작
        목표를 위해 공부 중입니다.
      </div>
      <div className="langBox">
        <span className="langName">React</span> : 기초적인 지식도 없는
        상태입니다. 하지만 실무에서도 사용도가 <br />
        굉장히 높기에 본격적으로 배워보고 싶습니다. 멋사에서 react를 완벽하게
        학습할 기회가 있었으면 좋겠습니다:)
      </div>
      <div className="langBox">
        <span className="langName">Python</span> : 1학년에 배운 C언어와 유사점이
        있어 기초 지식은 있지만, 코드를 작성을 해본적이 거의 없는 상태입니다.
        궁극적인 목표인 프론트엔드 개발자가 되기위해선 백엔드 지식도 필요하다고
        생각하여 학교 내의 강의 2개와 스스로도 학습할 예정입니다.
      </div>
    </div>
  );
};

export default SkillExplain;
