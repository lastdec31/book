import 'react';
import axios from 'axios';
import Image from "next/image";

export default async function Home() {

  const TTBKey = 'ttbchichanej1435001';
  const ItemId = '9791130654621';
  let bbb = [];
  try {
    const response = await axios.get('http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey='+TTBKey+'&ItemId='+ItemId+'&output=js&Version=20131101', {
      headers: {
          'Content-Type': 'application/json',
      }
    });
    bbb = response.data.item;
    console.log(bbb);
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
                쪽수 : {item.subInfo.itemPage}<br />
                
                {/* 판형 정보 (예: 양장본, 반양장본 등등) : {item.styleDesc}<br />
                깊이 : {item.sizeDepth}<br />
                세로 : {item.sizeHeight}<br />
                가로 : {item.sizeWidth}<br /> */}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
