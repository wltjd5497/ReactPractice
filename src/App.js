import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // useState()시 자동완성

function App() {

  let post = '강남 우동 맛집'; // 서버에서 가져온 데이터라고 가정한다.
  let test='text_id';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); // '작명' 한다
  // a: state에 보관했던 자료 나옴
  // b: state 변경 도와주는 함수
  
  let [logo, setLogo] = useState('ReactBlog'); // 블로그 이름

  let [따봉, 따봉변경] = useState(0); // c는 state 변경 함수

  function 함수() {
    따봉변경++;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id = { test } style={{color:'red', fontSize: '16px'}}>{logo}</h4> 
      </div>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick = {() => { 따봉변경(따봉+1) }}>👍</span> { 따봉 } <span onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}>👩</span> </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>

    
  );
}

export default App;
