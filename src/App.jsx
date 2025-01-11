import { useState, useEffect } from 'react';
import './App.css'

function App(){
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    fetch("https://openapi.naver.com/v1/search/book.json", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'X-Naver-Client-Id': 'xE7qKkqwBOh7qzHxUYvm',
        'X-Naver-Client-Secret': 'i6szQJy5Sw'
      },

      // &X-Naver-Client-Id=xE7qKkqwBOh7qzHxUYvm&X-Naver-Client-Secret=i6szQJy5Sw
      params: {
        query: '안녕',
        display: 10
      }
    })
    // .then((response) => response.json())
    // .then((data) => console.log(data.docs))
    .then((res) => setTodoList(res.docs))
    .then(data => {
      console.log(data.items)
    })
    .catch(console.error);
  }, []);
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <ul>
        {todoList === null ? ( // todoList가 null인 경우 "Loading..."이라는 메시지를 보여주고, 그렇지 않은 경우에만 todoList를 매핑하여 표시
          <div>Loading...</div>
        ) : (
          todoList.map((item, index) => (
            <li key={index}>
              <div className="img-wrap"><img src={item.TITLE_URL} /></div>
              <div className="info-wrap">
                <div dangerouslySetInnerHTML={{__html: item.EA_ISBN}}></div>
                <div dangerouslySetInnerHTML={{__html: item.TITLE}}></div>
                <div dangerouslySetInnerHTML={{__html: item.AUTHOR}}></div>
                <div dangerouslySetInnerHTML={{__html: item.PUBLISHER}}></div>
              </div>
              
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
    

export default App;
