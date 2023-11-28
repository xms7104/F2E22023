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
import defaultData from './data/default';
import detailCity from './data/detailCity';

export default function Home() {
  const [title, setTitle] = useState('第15任 總統副總統大選');
  const [data, setdata] = useState([]);
  const [cityOption, setCityOption] = useState([]);
  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [areaDetail, setAreaDetail] = useState([]);
  const [voting, setVoting] = useState(defaultData.voting);
  const [votingInformation, setVotingInformation] = useState(defaultData.votingInformation);
  const [party, setParty] = useState(defaultData.party);
  const [partyInformation, setPartyInformation] = useState(defaultData.partyInformation);
  const [selected, setSelected] = useState(null);
  const titleData = [
    {id:0, title: '第15任 總統副總統大選'},
    {id:1, title: '第10任 立法委員選舉'},
  ];

  const cityData = ['基隆市', '臺北市', '新北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '臺東縣', '花蓮縣', '金門縣', '連江縣', '澎湖縣'];

  useEffect(() => {
    let option = [];
    for(let i=0; i < cityData.length; i++){
      option.push({label: cityData[i], value: cityData[i]});
    }
    setCityOption(option);
  },[])

  useEffect(() => {
    setArea([]);
    setAreaDetail([]);
    if(city.length !== 0){
      setdata(detailCity[city.value]);
    }
  },[city]);

  useEffect(() => {
    setAreaDetail([]);
    if(city.length !==0 && area.length !== 0){
      setdata(detailCity[city.value][area.value]);
    }
  },[area])

  useEffect(() => {
    if(city.length !==0 && area.length !== 0 && areaDetail.length !== 0){
      setdata(detailCity[city.value][area.value][areaDetail.value]);
    }
  },[areaDetail])

  useEffect(() => {
    if(data.length !== 0 && data !== undefined && data !== null){
      const votingChartY = parseInt(data['有效票數'].replace(",", ""));
      const votingChartN = parseInt(data['無效票數'].replace(",", ""));
      const partyChart1 = parseInt(data['親民黨'].replace(",", ""));
      const partyChart2 = parseInt(data['中國國民黨'].replace(",", ""));
      const partyChart3 = parseInt(data['民主進步黨'].replace(",", ""));

      setVoting([
        {value: votingChartY, name:'有效票數', itemStyle: { color: '#000000' }}, 
        {value: votingChartN, name:'無效票數', itemStyle: { color: '#cccccc' }}
      ]);
      
      setVotingInformation({
        '投票率' : data['投票率'],
        '投票數' : data['投票數'],
        '有效票數' : data['有效票數'],
        '無效票數' : data['無效票數']
      });

      setParty([
        {value:partyChart1, name:'親民黨', itemStyle: { color: '#dfa175' }}, 
        {value:partyChart2, name:'中國國民黨', itemStyle: { color: '#8894d9' }}, 
        {value:partyChart3, name:'民主進步黨', itemStyle: { color: '#84cb98' }}
      ])

      setPartyInformation({
        '親民黨' : {voting: data['親民黨'], color: '#dfa175', cp: '宋楚瑜', cvp: '余湘'},
        '中國國民黨' : {voting: data['中國國民黨'], color: '#8894d9', cp: '韓國瑜', cvp: '張善政'},
        '民主進步黨' : {voting: data['民主進步黨'], color: '#84cb98', cp: '蔡英文', cvp: '賴清德'}, 
        '有效票數' : data['有效票數']
      });
    }
  },[city, area, areaDetail])

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
        <div className='lg:flex justify-start items-center md:grid md:w-full sm:grid sm:w-full'>
          <div className='lg:w-[150px] lg:mb-0 mr-2 md:w-full md:mb-4 md:w-[80vw] sm:mb-4 sm:w-[80vw]'>
            <Select className='text-black' placeholder="請選擇..." value={city} options={cityOption} onChange={(e) => {setCity(e)}} />
          </div>
          <div className='flex justify-start items-center'>
            <div className='lg:w-[150px] mr-2 md:w-[39.25vw] sm:w-[39.25vw]'>
              <AreaOption city={city} area={area} setArea={setArea} setVoting={setVoting} setParty={setParty} />
            </div>
            <div className='lg:w-[150px] md:mr-2 md:w-[39.25vw] sm:w-[39.25vw]'>
              <AreaDetailOption city={city} area={area} areaDetail={areaDetail} setAreaDetail={setAreaDetail} setVoting={setVoting} setParty={setParty} />
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center lg:w-[80px] lg:h-[38px] border-2 border-solid border-black rounded-md cursor-pointer px-2 py-2 md:w-[30px] md:h-[90px] sm:w-[30px] sm:h-[90px]'
        onClick={() => {
          setCity([]);
          setArea([]);
          setAreaDetail([]);
          setSelected(null);
          setVoting(defaultData.voting);
          setVotingInformation(defaultData.votingInformation);
          setParty(defaultData.party);
          setPartyInformation(defaultData.partyInformation);}}>
          <button>
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
          <p className='lg:block mb-0 md:hidden sm:hidden'>清除</p>
        </div>
      </div>
      <div className='lg:flex justify-center items-start px-4 py-4 md:block sm:block'>
        <Chart voting={voting} votingInformation={votingInformation} party={party} partyInformation={partyInformation} />
        <TaiWanMap 
        selected={selected} 
        setSelected={setSelected} 
        setCity={setCity}
        setArea={setArea}
        setAreaDetail={setAreaDetail}
        setVoting={setVoting}
        setVotingInformation={setVotingInformation} 
        setParty={setParty}
        setPartyInformation={setPartyInformation} />
      </div>
    </main>
  )
}
