import Hobby from './Hobby';

const HobbyList = (props) => {
  const { hobby } = props.data;
  return (
    <>
      <h3>HOBBY</h3>
      <div className="wrapHobby">
        {hobby.map((data, index) => (
          // index는 제공되는 내장 값
          <Hobby data={data} key={index} isDark={props.dark}></Hobby>
        ))}
      </div>
    </>
  );
};

export default HobbyList;
