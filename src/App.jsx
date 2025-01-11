import 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App(){
  async function api() {
    const key = 'cf147d1cae44a666d1ea8c29e002eca5459906745edfb3c090ab1d974276413c';
    const srchTarget = 'title';
    const pageNum = '1';
    const pageSize = '';
    const kwd = '바보'//event.target.value;
    await fetch("https://www.nl.go.kr/NL/search/openApi/search.do?key="+key+"&srchTarget="+srchTarget+"&pageNum="+pageNum+"&pageSize="+pageSize+"&kwd="+kwd+"&category=도서&apiType=json")
    .then(response => response.json())
    .then(json => console.log(json.result))
    // .then(console.log(json.result))
    // .then( json => console.log(json.result))
    // .then( function aaa() {
    //   console.log(json.result);
    // })
    // .then( json => return (let apiresult = [json.result]))
    // //   const element = document.getElementById("ul"); 
    // //   let listItem = document.createElement("li");
    // //   listItem.textContent = 'aaa';
    // //   element.appendChild(listItem);
    // // })
    // // .then( json => {
    // //   const element = document.createElement("ul"); 
    // //   for (const json of json.result) {
    // //     const listItem = document.createElement("li");
    // //     listItem.appendChild(document.createElement("strong")).textContent =
    // //     json.titleInfo;
    // //     listItem.append(` can be found in ${json.Location}. Cost: `);
    // //     listItem.appendChild(document.createElement("strong")).textContent =
    // //       `£${json.typeName}`;
    // //       element.appendChild(listItem);
    // //   }
    // // })
    .catch(console.error);
  }
  return (
    <div>
      <input type="text" onChange={api} />
      {/* {api.apiresult.map((item)=> (
        <div name={item.name} price={item.price}></div>
      ))} */}
    </div>
  )
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
