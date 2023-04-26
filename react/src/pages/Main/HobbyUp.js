import '../../Main.css';

const HobbyUp = (props) => {
  const { hobbyExplain } = props.data;
  return (
    <div className="hobby__up__wrapper">
      <div className="hobby__left">" Hobby "</div>
      <div className="hobby__right">
        {hobbyExplain}
        <div id="hobby__result">
          🦁 활동적이고, 직접 도전하는 걸 좋아하는.. 멋사...?
        </div>
      </div>
    </div>
  );
};

export default HobbyUp;
