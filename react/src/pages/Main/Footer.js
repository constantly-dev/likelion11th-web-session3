import '../../Main.css';
const Footer = (props) => {
  return (
    <footer className={props.dark ? 'footerDark' : 'footer'}>
      <div className="instagram">
        <a
          href="https://www.instagram.com/hyuk_ahh/"
          target="_blank"
          rel="noreferrer"
          // rel="noreferrer"은 _blank로 새 탭이 열릴 때 참조하는 웹페이지가 현재 페이지와 관련된 정보를 알 수 없도록 해준다.
          // 한마디로 보안을 위한 것이다.
        >
          <img
            src={require('../../../src/images/instagram.png')}
            alt=""
            id="insta"
          />
        </a>
      </div>
      <div className="copyright">
        Copyright 2023. Leejinhyeok all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
