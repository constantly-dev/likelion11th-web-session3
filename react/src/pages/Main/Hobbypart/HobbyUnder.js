import '../../../Main.css';
import HobbyItem from './HobbyItem';

const HobbyUnder = (props) => {
  const { hobby } = props.data;
  return (
    <div className="hobby__under__wrapper">
      {hobby.map((data, index) => (
        <HobbyItem data={data} key={index} />
      ))}
    </div>
  );
};

export default HobbyUnder;
