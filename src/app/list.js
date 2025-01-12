import 'react';
import axios from 'axios';
import Image from "next/image";

export default async function Home() {

  const aladin_ttbkey = 'ttbchichanej1435001'
  let bbb = [];
  try {
    const response = await axios.get('http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey='+aladin_ttbkey+'&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101', {
      headers: {
          'Content-Type': 'application/json',
      }
    });
    bbb = response.data.item;
  } catch (error) {
    console.log(error);
  }
  
  return (
    <div className="App">
      <h1>베스트셀러</h1>
      <ul>
        {bbb === null ? ( // aaa가 null인 경우 "Loading..."이라는 메시지를 보여주고, 그렇지 않은 경우에만 aaa를 매핑하여 표시
          <div>Loading...</div>
        ) : (
          bbb.map((item, index) => (
            <li key={index}>
              {<div className="img-wrap"><Image src={item.cover} alt="" width={64} height={84} /></div>}
              <div className="info-wrap">
                제목 : {item.title}<br />
                저자 : {item.author}<br />
              </div>
              
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
