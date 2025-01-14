import 'react';
import axios from 'axios';
import Image from "next/image";
import { Vibrant } from "node-vibrant/node";


export default async function Home() {

  const TTBKey = 'ttbchichanej1435001';
  const Query = '행복';
  let bbb = [];
  try {
    const response = await axios.get('http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey='+TTBKey+'&Query='+Query+'&output=js&Version=20131101&Cover=MidBig', {
      headers: {
          'Content-Type': 'application/json',
      }
    });
    bbb = response.data.item;
    // console.log(bbb);
  } catch (error) {
    console.log(error);
  }

  let aaa = '';
  Vibrant.from("https://image.aladin.co.kr/product/2098/26/coversum/8926793257_1.jpg")
  .getPalette()
  .then(
    (palette) => console.log(palette.Vibrant.hex)
  );
  

  return (
    <div className="App">
      <h1>베스트셀러</h1>
      <ul className="result">
        {bbb === null ? ( // aaa가 null인 경우 "Loading..."이라는 메시지를 보여주고, 그렇지 않은 경우에만 aaa를 매핑하여 표시
          <div>Loading...</div>
        ) : (
          bbb.map((item, index) => (
            <li key={index}>
              {<div className="img-wrap"><Image src={item.cover} alt="" fill /></div>}
              <div className="info-wrap">
                <strong>{item.title}</strong><br />
                <sub>{item.author}</sub><br />
              </div>
              <div className="color" color={aaa}>컬러테스트</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
