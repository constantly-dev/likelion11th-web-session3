import '../../Main.css';

const Skillitem = (props) => {
  const skill = props.data;
  return (
    <div className="language">
      <div className="lang__image">
        <img src={require('../../../src/images/html.png')} alt={skill} />
      </div>
      <div className="skillBar__wrapper">
        <div className="skillBar">
          <div className={props.darkMode ? 'barDark bar1' : 'bar bar1'}></div>
        </div>
      </div>
    </div>
  );
};

export default Skillitem;
