# 실행 화면
<img src="https://user-images.githubusercontent.com/107227445/182543724-c0cc1a01-874c-4331-b9c1-30735cd734d3.gif"/>

# 폴더 구조
``` bash
📦src
 ┣ 📂components
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Form.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜List.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📂pages
 ┃ ┣ 📜DetailPage.jsx
 ┃ ┗ 📜TodoList.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todolist.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
 
 ```
# 컴포넌트 구조
* Detail: DetailPage에 들어갈 상세 정보
* Form: 제목과 내용이 입력되고 추가버튼을 누르면 dispatch로 액션 객체를 보내서 reducer에서 state 업데이트
* Header: 상단 헤더 구현 
* Layout: Todolist에서 children으로 props를 받아 페이지의 레이아웃 크기 설정
* List: working 과 done으로 나눠서 보이게 설정
* Todo: 상세페이지로 이동, 삭제, 완료 기능 구현

# pages 구조
* DetailPage: Detail 컴포넌트를 받아서 라우터에 연결
* TodoList: Header,Form,List을 받아서 Layout에  props로 보내줌 

# redux 구조
* configStore: 모듈과 스토어 연결
* todolist: action value, action creator, reducer로 구성

# shared 구조
* Router: 페이지를 구현하도록 BrowserRouter, Routes, Route 설정
