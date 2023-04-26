import '../../Main.css';
import Skillitem from './Skillitem';
const Skill = (props) => {
  const { skill } = props.data;
  return (
    <div className="skill__item skill__item3">
      <div className="language__wrapper">
        {skill.map((data, index) => (
          <Skillitem data={data} key={index} darkMode={props.isDark} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
