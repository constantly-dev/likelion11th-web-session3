import React, { useState } from 'react';
import './Login.css';

const Login = (props) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const loginFunction = props.login();

  const idInput = (e) => {
    setId(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const LoginReal = (e, loginFunction) => {
    e.preventDefault();
    console.log(id, password);
    // JSON.parse(localStorage.getItem('id'));
    // JSON.parse(localStorage.getItem('password'));
    // if (id === JSON.parse(localStorage.getItem('id'))) {
    //   console.log('id same');
    // }
    // if (password === JSON.parse(localStorage.getItem('password'))) {
    //   console.log('id same');
    //   props.login();

    if (
      id === localStorage.getItem('id') &&
      password === localStorage.getItem('password')
    ) {
      console.log('fhrmdlstjdrhd');
      console.log(props);
      loginFunction();
    }
    // 삼항연산자로 : 뒤에 값이 있다면 전달해줘야 하니 return작성
    // props.값을 가져올 때 함수를 가져오면 () 잊지말기.
  };

  return (
    <div className="wrapper_box">
      <h2>LOG IN</h2>
      <form className="login_form" onSubmit={() => LoginReal(loginFunction)}>
        <input
          type="text"
          className="login_input"
          placeholder="ID"
          onChange={idInput}
        />
        <input
          placeholder="Password"
          type="Password"
          className="login_input"
          onChange={passwordInput}
        />
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
