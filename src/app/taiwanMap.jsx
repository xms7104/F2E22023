'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import taiwanMap from './data/taiwanMapData';
import Tip from './Tip';
import data from './data/detailCity'

function TaiWanMap({
  selected, 
  setSelected, 
  setCity, 
  setArea, 
  setAreaDetail,
  setVoting, 
  setVotingInformation, 
  setParty, 
  setPartyInformation,
  partyInformation,
  city, 
  area, 
  areaDetail}) {
  const [hovered, setHovered] = useState(null);

  useEffect(() =>{
    if(selected !== null){
      let select = data[selected[0]];
      if(selected.length === 1){
        select = data[selected[0]];
        setCity({label: selected[0], value: selected[0]});
        setArea([]);
        setAreaDetail([]);
      }else if(selected.length === 2){
        select = data[selected[0]][selected[1]];
        setCity({label: selected[0], value: selected[0]});
        setArea({label: selected[1], value: selected[1]});
        setAreaDetail([]);
      }else if(selected.length === 3){
        select = data[selected[0]][selected[1]][selected[2]];
        setCity({label: selected[0], value: selected[0]});
        setArea({label: selected[1], value: selected[1]});
        setAreaDetail({label: selected[2], value: selected[2]});
      }
      const votingChartY = parseInt(select['有效票數'].replace(",", ""));
      const votingChartN = parseInt(select['無效票數'].replace(",", ""));
      const partyChart1 = parseInt(select['親民黨'].replace(",", ""));
      const partyChart2 = parseInt(select['中國國民黨'].replace(",", ""));
      const partyChart3 = parseInt(select['民主進步黨'].replace(",", ""));
      setVoting([
        {value: votingChartY, name:'有效票數', itemStyle: { color: '#000000' }}, 
        {value: votingChartN, name:'無效票數', itemStyle: { color: '#cccccc' }}
      ]);
      
      setVotingInformation({
        '投票率' : select['投票率'],
        '投票數' : select['投票數'],
        '有效票數' : select['有效票數'],
        '無效票數' : select['無效票數']
      });

      setParty([
        {value:partyChart1, name:'親民黨', itemStyle: { color: '#dfa175' }}, 
        {value:partyChart2, name:'中國國民黨', itemStyle: { color: '#8894d9' }}, 
        {value:partyChart3, name:'民主進步黨', itemStyle: { color: '#84cb98' }}
      ])

      setPartyInformation({
        '親民黨' : {voting: select['親民黨'], color: '#dfa175', cp: '宋楚瑜', cvp: '余湘'},
        '中國國民黨' : {voting: select['中國國民黨'], color: '#8894d9', cp: '韓國瑜', cvp: '張善政'},
        '民主進步黨' : {voting: select['民主進步黨'], color: '#84cb98', cp: '蔡英文', cvp: '賴清德'}, 
        '有效票數' : select['有效票數']
      });
    }
  },[selected])

    function taiwanPC(){
      return taiwanMap['pc'].map((item, index) => {
        let imgSrc = item.uri;
        if(hovered === item.name){
          imgSrc = item.hoverUri;
        }else if(hovered === null && selected === item.name){
          imgSrc = item.focusUri;
        }else if(hovered === null && selected === null){
          imgSrc = item.uri;
        }
        
        return(
          <button 
          key={item.id} 
          className='absolute'
          style={{top:item.top, left: item.left, zIndex:item.zIndex}}
          onMouseEnter={() => {setHovered(item.name);}}
          onMouseLeave={() => {setHovered(null);}}
          onClick={() => {
            let result = item.name.match(/(.*?[縣市鎮鄉里])/g).map(match => match.trim());
            setSelected(result);
          }}>
            <Image alt={item.name} src={imgSrc} width={item.size} height={40} />
          </button>
        )
      })
    }

    function taiwanIpad(){
      return taiwanMap['ipad'].map((item, index) => {
        return(
          <button key={item.id} className='absolute'
          style={{top:item.top, left: item.left, zIndex:item.zIndex}}>
            <Image alt={item.name} src={item.uri} width={item.size} height={40} />
          </button>
        )
      })
    }

    function taiwanMobile(){
      return taiwanMap['mobile'].map((item, index) => {
        return(
          <button key={item.id} className='absolute'
          style={{top:item.top, left: item.left, zIndex:item.zIndex}}>
            <Image alt={item.name} src={item.uri} width={item.size} height={40} />
          </button>
        )
      })
    }

    return (
      <div className='lg:flex md:block sm:block justify-around items-start xl:w-[70%] lg:w-[70%] md:w-full sm:w-full'>
        <p className='w-[10%]'></p>
        <div className='xl:w-[65%] lg:w-[70%] md:w-[80%] md:mx-auto md:my-0 sm:w-full md:h-[75vh] sm:h-[75vh]'>
          <div className='xl:block xl:relative xl:h-screen lg:hidden md:hidden sm:hidden'>
            {taiwanPC()}
          </div>
          <div className='xl:hidden lg:block lg:relative lg:h-screen md:hidden sm:hidden'>
            {taiwanIpad()}
          </div>
          <div className='xl:hidden lg:hidden md:block sm:block sm:relative md:h-[45vh] sm:h-[45vh]'>
            {taiwanMobile()}
          </div>
        </div>
        <Tip
        city={city}
        area={area}
        areaDetail={areaDetail}
        partyInformation={partyInformation} />
      </div>
    )
  }
  
  export default TaiWanMap;