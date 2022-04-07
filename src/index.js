//index.html에다가 App.js 넣는 연결

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'; //같은 폴더 App 임포트 아래 리액트가 <App />를 컴포넌트로 인식

ReactDOM.render(<App />, document.getElementById('root')); //DOM트리 렌더링해라 <App />컴포넌트를 index.html의 'root'인 엘레멘트 에다가