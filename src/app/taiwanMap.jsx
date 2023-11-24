'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import taiwanMap from './data/taiwanMapData';
import Tip from './Tip';

function TaiWanMap() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

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
          style={{top:item.top, left: item.left}}
          onMouseEnter={() => {setHovered(item.name);}}
          onMouseLeave={() => {setHovered(null);}}
          onClick={() => {setSelected(item.name);}}>
            <Image alt={item.name} src={imgSrc} width={item.size} height={40} />
          </button>
        )
      })
    }

    function taiwanIpad(){
      return taiwanMap['ipad'].map((item, index) => {
        return(
          <button key={item.id} className='absolute'
          style={{top:item.top, left: item.left}}>
            <Image alt={item.name} src={item.uri} width={item.size} height={40} />
          </button>
        )
      })
    }

    function taiwanMobile(){
      return taiwanMap['mobile'].map((item, index) => {
        return(
          <button key={item.id} className='absolute'
          style={{top:item.top, left: item.left}}>
            <Image alt={item.name} src={item.uri} width={item.size} height={40} />
          </button>
        )
      })
    }

    return (
      <div className='lg:flex md:block sm:block justify-around items-start xl:w-[70%] lg:w-[70%] md:w-full sm:w-full'>
        <div className='xl:w-[70%] lg:w-[70%] md:w-[80%] md:mx-auto md:my-0 sm:w-full'>
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
        <Tip />
      </div>
    )
  }
  
  export default TaiWanMap;