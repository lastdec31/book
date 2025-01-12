import 'react';
import axios from 'axios';
import Image from "next/image";
import { version } from 'react';
// import styles from "./page.module.css";



// const CLINET_ID = process.env.NEXT_PUBLIC_API_KEY_NAVER_ID;
// const CLINET_PW = process.env.NEXT_PUBLIC_API_KEY_NAVER_PW;
// const BASE_PATH = "/v1/search/item.json";

export default async function Home() {

  let aaa = [];
  try {
    const response = await axios.get('http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbchichanej1435001&QueryType=Title&Query=aladdin&output=js', {
      // headers: {
      //     'Content-Type': 'application/json',
      // }
    });
    // const response = await fetch('http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbchichanej1435001&QueryType=Title&Query=aladdin&output=js', {
    //   // method: "GET",
    //   // headers: {
    //   //   'Content-Type': 'application/json',
    //   // },
    // })
    // .then((response) => response.json());
    // const data  = JSON.parse(response.data)
    // console.log(response.data.items);
    // return response.data;
    // aaa = response.data.item;
    // (response) => response.json();
    // const data = response.json();
    
    // aaa(data.item);
    // aaa = response.data[];
    // const getEntries = Object.values(response.data).map((values, idx) => {
    //   return console.log(values, idx);
    // });    
    // aaa = JSON.stringify(response);
    
    aaa = response.data;
    console.log("%c 콘솔 : " + aaa,"background:blue; color:white");
  } catch (error) {
    console.log(error);
  }
  
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <ul>
        {/* <li>{aaa.slice(1)}</li> */}
        {aaa === null ? ( // aaa가 null인 경우 "Loading..."이라는 메시지를 보여주고, 그렇지 않은 경우에만 aaa를 매핑하여 표시
          <div>Loading...</div>
        ) : (
          // aaa[Object.keys(aaa)].map(item => (
          //   <li key={item.id}>{item.name}</li>
          // ))
          aaa.map((item, index) => (
            <li key={index}>
              {<div className="img-wrap"><Image src={aaa.cover} alt="" width={64} height={64} /></div>}
              <div className="info-wrap">
                {/* <div dangerouslySetInnerHTML={{__html: item.data}}></div>
                <div dangerouslySetInnerHTML={{__html: item.author}}></div>
                <div dangerouslySetInnerHTML={{__html: item.publisher}}></div> */}
              </div>
              
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
