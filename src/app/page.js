'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Header from './header';
import TaiWanMap from './taiwanMap';
import AreaOption from './area';

export default function Home() {
  const[title, setTitle] = useState('第15任 總統副總統大選');
  const[cityOption, setCityOption] = useState([]);
  const[city, setCity] = useState([]);
  const[area, setArea] = useState([]);

  const titleData = [
    {id:0, title: '第15任 總統副總統大選'},
    {id:1, title: '第10任 立法委員選舉'},
  ]

  const cityData = ['基隆市', '台北市', '新北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '台南市', '高雄市', '屏東縣', '台東縣', '花蓮縣', '金門縣', '連江縣', '澎湖縣'];

  useEffect(() => {
    let option = [];
    for(let i=0; i < cityData.length; i++){
      option.push({label: cityData[i], value: cityData[i]});
    }
    setCityOption(option);
  },[])

  function titleLayout(){
    return titleData.map((item, index) => {
      return(
        <p key={item.id} 
        className='w-[200px] flex justify-center items-end cursor-pointer'
        style={{
          color: title === item.title ? '#262E49' : '#C6C6C6',
          fontWeight: title === item.title ? '600' : '0',
          borderBottom: title === item.title ? '2px solid #262E49' : '0px',
          }}
        onClick={() => { setTitle(item.title); }}>
          {item.title}
        </p>
      )
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className='mx-4 my-4 flex justify-start items-end'>
        {titleLayout()}
      </div>
      <div className='w-[30%]'>
        <Select className='text-black' options={cityOption} onChange={(e) => {setCity(e)}} />
      </div>
      <div>
        <AreaOption city={city} area={area} setArea={setArea} />
      </div>
      <TaiWanMap />
    </main>
  )
}
