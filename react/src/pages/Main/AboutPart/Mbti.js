import '../../../Main.css';

const Mbti = () => {
  return (
    <>
      <div className="mbti__container">
        <div className="mbti mbti__left">
          <div className="folder">
            <p>../about</p>
          </div>
        </div>
        <div className="mbti mbti__right">
          <img
            src={require('../../../../src/images/mbti.png')}
            alt="ESTJ"
            id="estj"
          />
          <div className="mbti">
            <div className="mbti__title">"ESTJ"</div>
            <div className="mbti__content">
              E가 나오긴 했지만, 하루하루 I와 싸우는 사람입니다. 스스로 공감을
              잘 한다고 생각하지만, 친구들이 보기에는 팩폭의 비중이 더 크다고..
              하지만 그만큼 현실적으로 바라보고 하는 일에 더더욱 완벽하게 하는
              성격이라고도 볼 수 있고, 솔직하게 사람들을 대하고 관계를 잘
              유지하는 장점이 된다고도 생각합니다.
              <div id="mbti__result">즉, ESTJ는 멋사 적합형?? 🦁</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mbti;
