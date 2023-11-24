'use client';
import React from 'react';
import Image from 'next/image';
import taiwanMap from './data/taiwanMapData';
import Tip from './Tip';

function TaiWanMap() {
    function taiwanPC(){
      return taiwanMap['pc'].map((item, index) => {
        return(
          <button key={item.id} className='absolute'
          style={{top:item.top, left: item.left}}>
            <Image alt={item.name} src={item.uri} width={item.size} height={40} />
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

    return (
      <div className='flex justify-around items-start xl:w-[70%] lg:w-[70%] md:w-screen'>
        <div className='xl:w-[70%] lg:w-[70%] md:w-[56%]'>
          <div className='xl:block xl:relative xl:h-screen lg:hidde md:hidden sm:hidden'>
            {taiwanPC()}
          </div>
          <div className='xl:hidden lg:block lg:relative lg:h-screen md:block md:relative md:h-screen sm:block sm:relative sm:h-screen'>
            {taiwanIpad()}
          </div>
        </div>
        <Tip />
      </div>
    )
  }
  
  export default TaiWanMap;