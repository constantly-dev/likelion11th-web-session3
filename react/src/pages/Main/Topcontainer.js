import '../../Main.css';
import Screen from './Screen';
import About from './About';

const Topcontainer = (props) => {
  return (
    <div className="top__container">
      <Screen isDark={props.dark}></Screen>
      <About isDark={props.dark}></About>
    </div>
  );
};

export default Topcontainer;
