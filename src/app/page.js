import 'react';
import ItemSearch from './pages/ItemSearch';

export default async function Home() { 

  return (
    <div className="App">
      <input className='search' type="search" placeholder='도서명,저자,출판사,ISBN' /><button>검색</button>
      <ItemSearch />
    </div>
  );
}
