import '../../../Main.css';

const QuestionContainer = (props) => {
  return (
    <div class="question__container">
      <div class="groove__animation">
        "???: 멋사 들어갈 생각에 춤이 저절로.."
      </div>
      <img src={require('../../../../src/images/megif.gif')} alt="jinhyeok" />
      <div class={props.dark ? 'easterEggDark' : 'easterEgg'}>
        <div id="easterEgg__content">
          = 사실 부족한 실력으로 웹을 만들어 혼이 나간 제 모습💤
        </div>
        <div class="lastShout">"어흥을 외치며 이곳에 잠들다"</div>
        <span>2023.03.06 mon </span>
      </div>
    </div>
  );
};

export default QuestionContainer;
