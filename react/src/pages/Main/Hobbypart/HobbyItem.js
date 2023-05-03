import '../../../Main.css';

const HobbyItem = (props) => {
  const hobby = props.data;
  return (
    <div className="hobby">
      <div className="imgBox">
        <img src={require('../../../../src/images/coding.png')} alt={hobby} />
        {/* 벡틱`으로 변수와 문자열을 같이사용하고, require을 통해 
        이미지를 동적으로 컨트롤 */}
      </div>
      <div className="textBox">
        <p className="textBox__name">{hobby}</p>
      </div>
    </div>
  );
};

export default HobbyItem;
