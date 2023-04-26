import '../../Main.css';
import Skill from './Skill';
import SkillExplain from './SkillExplain';
import Data from '../../Data.json';

const SkillWrapper = (props) => {
  return (
    <div className="skill__wrapper">
      <div className="skill__item skill__item1">
        <div className="folder">
          <p>../skill</p>
        </div>
      </div>
      <div className="skill__item skill__item2"></div>
      <Skill data={Data} isDark={props.dark}></Skill>
      <SkillExplain></SkillExplain>
    </div>
  );
};

export default SkillWrapper;
