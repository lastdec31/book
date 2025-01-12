import 'react';
import axios from 'axios';
import Image from "next/image";
import styles from "./page.module.css";



const CLINET_ID = process.env.NEXT_PUBLIC_API_KEY_NAVER_ID;
const CLINET_PW = process.env.NEXT_PUBLIC_API_KEY_NAVER_PW;
// const BASE_PATH = "/v1/search/book.json";

export default async function Home() {
  let aaa = [];
  try {
    // const response = await axios.get(`${BASE_PATH}`, {
    const response = await axios.get('https://openapi.naver.com/v1/search/book.json', {
      params: {
        query: '작별하지않는다', // 검색 키워드
        display: 10, // 한 번에 표시할 검색 결과 (1 ~ 100)
        start: 1, //검색시작위치 (1 ~ 100)
        sort: 'sim', // 검색 결과 정렬 방법(sim: 정확도 순/date: 출간일순)
        
      },
      headers: {
        'Content-Type': 'application/json',
        'X-Naver-Client-Id': CLINET_ID,
        'X-Naver-Client-Secret': CLINET_PW,
      },
    });
    // console.log(response.data.items);
    // return response.data.items;
    aaa = response.data.items;
    // console.log(aaa);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <ul>
        {aaa === null ? ( // aaa가 null인 경우 "Loading..."이라는 메시지를 보여주고, 그렇지 않은 경우에만 aaa를 매핑하여 표시
          <div>Loading...</div>
        ) : (
          aaa.map((item) => (
            <li key={item.isbn}>
              <div className="img-wrap"><Image src={item.image} alt="" width={64} height={64} /></div>
              <div className="info-wrap">
                <div dangerouslySetInnerHTML={{__html: item.title}}></div>
                {/* <div dangerouslySetInnerHTML={{__html: item.description}}></div> */}
                <div dangerouslySetInnerHTML={{__html: item.author}}></div>
                <div dangerouslySetInnerHTML={{__html: item.publisher}}></div>
              </div>
              
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
