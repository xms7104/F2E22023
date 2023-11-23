'use client';
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import Header from './header';
import TaiWanMap from './taiwanMap';
import AreaOption from './area';
import AreaDetailOption from './areaDetail';
import Chart from './chart';
import Tip from './Tip';

export default function Home() {
  const [title, setTitle] = useState('第15任 總統副總統大選');
  const [cityOption, setCityOption] = useState([]);
  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [areaDetail, setAreaDetail] = useState([]);
  const [voting, setVoting] = useState([{value:14300940, name:'有效票數', itemStyle: { color: '#000000' }}, {value:163631, name:'無效票數', itemStyle: { color: '#cccccc' }}]);
  const [votingInformation, setVotingInformation] = useState({
    '投票率' : '74.9029',
    '投票數' : '14,464,571',
    '有效票數' : '14,300,940',
    '無效票數' : '163,631'});
  const [party, setParty] = useState([{value:608590, name:'親民黨', itemStyle: { color: '#dfa175' }}, {value:5522119, name:'中國國民黨', itemStyle: { color: '#8894d9' }}, {value:8170231, name:'民主進步黨', itemStyle: { color: '#84cb98' }}]);
  const [partyInformation, setPartyInformation] = useState({
    '親民黨' : {voting: '608,590', color: '#dfa175', cp: '宋楚瑜', cvp: '余湘'},
    '中國國民黨' : {voting: '5,522,119', color: '#8894d9', cp: '韓國瑜', cvp: '張善政'},
    '民主進步黨' : {voting: '8,170,231', color: '#84cb98', cp: '蔡英文', cvp: '賴清德'}, 
    '有效票數' : '14,300,940'});
  const titleData = [
    {id:0, title: '第15任 總統副總統大選'},
    {id:1, title: '第10任 立法委員選舉'},
  ]

  const cityData = ['基隆市', '臺北市', '新北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '臺東縣', '花蓮縣', '金門縣', '連江縣', '澎湖縣'];

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
    <main className="min-h-screen bg-white text-black">
      <Header />
      <div className='mx-4 my-4 flex justify-start items-end'>
        {titleLayout()}
      </div>
      <div className='mx-4 flex justify-start items-center'>
        <div className='w-[150px] mr-2'>
          <Select className='text-black' placeholder="請選擇..." options={cityOption} onChange={(e) => {setCity(e)}} />
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[150px] mr-2'>
            <AreaOption city={city} area={area} setArea={setArea} setVoting={setVoting} setParty={setParty} />
          </div>
          <div className='w-[150px] mr-2'>
            <AreaDetailOption city={city} area={area} areaDetail={areaDetail} setAreaDetail={setAreaDetail} setVoting={setVoting} setParty={setParty} />
          </div>
        </div>
        <div className='flex justify-center items-center w-[80px] h-[38px] border-2 border-solid border-black rounded-md cursor-pointer px-2 py-2'>
          <button>
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
          <p className='mb-0'>清除</p>
        </div>
      </div>
      <div className='flex justify-center items-start px-4 py-4'>
        <Chart voting={voting} votingInformation={votingInformation} party={party} partyInformation={partyInformation} />
        <TaiWanMap />
        <Tip />
      </div>
    </main>
  )
}
