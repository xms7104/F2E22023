'use client';
import React from 'react';
import Image from 'next/image';
import taiwanMap from './data/taiwanMapData';

function TaiWanMap() {
    function taiwan(){
        return taiwanMap['pc'].map((item, index) => {
          return(
            <button key={item.id} className='absolute'
            style={{top:item.top, left: item.left}}>
              <Image alt={item.name} src={item.uri} width={item.size} height={40} />
            </button>
          )
        })
    }
    return (
        <div className='w-[50vw]'>
          <div className='relative h-screen'>
            {taiwan()}
          </div>
        </div>
    )
  }
  
  export default TaiWanMap;