import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App(){

  const [todoList, setTodoList] = useState(null);

  const key = 'cf147d1cae44a666d1ea8c29e002eca5459906745edfb3c090ab1d974276413c';
  // const srchTarget = 'title';
  const pageNum = '1';
  const pageSize = '30';
  const kwd = '작별하지 않는다'
  // https://www.nl.go.kr/seoji/SearchApi.do?cert_key=cf147d1cae44a666d1ea8c29e002eca5459906745edfb3c090ab1d974276413c&result_style=json&page_no=1&page_size=30&title=바보
  useEffect(() => {
    fetch("https://www.nl.go.kr/seoji/SearchApi.do?cert_key="+key+"&result_style=json&page_no="+pageNum+"&page_size="+pageSize+"&title="+kwd)
    .then((response) => response.json())
    // .then((data) => console.log(data.docs))
    .then((data) => setTodoList(data.docs))
    .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <ul>
        {todoList === null ? ( // todoList가 null인 경우 "Loading..."이라는 메시지를 보여주고, 그렇지 않은 경우에만 todoList를 매핑하여 표시
          <div>Loading...</div>
        ) : (
          todoList.map((result) => (
            <li key={result.EA_ISBN || result.SET_ISBN}>
              <div className="img-wrap"><img src={result.TITLE_URL} /></div>
              <div className="info-wrap">
                <div dangerouslySetInnerHTML={{__html: result.EA_ISBN}}></div>
                <div dangerouslySetInnerHTML={{__html: result.TITLE}}></div>
                <div dangerouslySetInnerHTML={{__html: result.AUTHOR}}></div>
                <div dangerouslySetInnerHTML={{__html: result.PUBLISHER}}></div>
              </div>
              
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

// const App = () => {
//   useEffect(()=> {
//       fetch('https://www.nl.go.kr/NL/search/openApi/search.do?key=cf147d1cae44a666d1ea8c29e002eca5459906745edfb3c090ab1d974276413c&apiType=xml&srchTarget=total&kwd=%ED%86%A0%EC%A7%80&pageSize=10&pageNum=1&sort=&category=%EB%8F%84%EC%84%9C', {
//           method : "GET"   
//       }).then(res=>res.json()).then(res=>{
//           console.log(1, res);
//       });
//   }, []);
//   const listItems = useEffect.map(person =>
//     <li>{person}</li>
//   );
//   return (
//       <div>
//         <ul>{listItems}</ul>
//         <a href="https://vite.dev" target="_blank">
//           <img src='https://s.pstatic.net/static/www/mobile/edit/20250106_1095/upload_1736148675351zTje9.jpg' className="logo" alt="Vite logo" />
//         </a>
//       </div>
//   );
// };

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
