import '../../../Main.css';
const PassionWrapper = (props) => {
  return (
    <div class="passion__wrapper" id="go__passion">
      <div class="passiontag1">
        {'<'} passion {'>'}
      </div>
      <div class={props.dark ? 'window3__dark' : 'window3'}>
        <div class="window2__header">
          <div class="rounds2">
            <div class="round round2-1"></div>
            <div class="round round2-2"></div>
            <div class="round round2-3"></div>
          </div>
        </div>
        <div class="window3__body">
          <div class="passion__img">
            <img
              src={require('../../../../src/images/DDC2023.jpg')}
              alt="DDC2023"
              id="DDC2023"
            />
          </div>
          <div class="passion__content">
            <span>저의 마지막 소개입니다 :)</span> <br />
            <br />
            열정으로 가득찬 사람으로 한 일에 관심을 가지면 정말 끝까지 질리고
            지칠 때까지 하는 성격을 지니고 있습니다. 이러한 점이 단점이 되는
            경우도 있을지 모르지만, 항상 무슨 일을 하던 원동력이 된 것 같습니다!
            그래서 관심이 생기는 것이 있으면 주구장창하고, 도전하는 편인 것
            같습니다. <br />
            그래서 개발자라는 꿈을 가진 이후로 잘 알아듣지는 못해도 IT
            컨퍼런스도 참여해보고, 코딩 관련된 인스타 계정을 마구 팔로잉하여
            몰라도 <br />
            매일 읽어가며 제 것으로 만들려고 노력하는 중입니다!
            <br />
            처음에는 힘들지 몰라도 이러한 작은 것들이 나중에 큰 긍정적
            <br />
            결과로 다가올 것이라고 생각하는 무한 긍정인입니다 ㅎㅎ.. <br />
            이제!! 멋사에서 좋은 사람들과 이 열정을 이어나가고 싶습니다 :)
          </div>
        </div>
      </div>
      <div class="mouse">
        <div class="wheel"></div>
      </div>

      <div class="passiontag2">
        {'<'} passion /{'>'}
      </div>
    </div>
  );
};

export default PassionWrapper;
