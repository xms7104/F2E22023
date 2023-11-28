'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import cityOption from './data/cityOption';

function AreaOption({ city, area, setArea }) {
    const [areaOption, setAreaOption] = useState([]);

    useEffect(() => {
        if(city.length !== 0){
            let option = [];
            if(city.value !== undefined){
                for(let i=0; i < cityOption[city.value].length; i++){
                    option.push({label: cityOption[city.value][i], value: cityOption[city.value][i]});
                }
                setAreaOption(option);
            }
        }
      },[city]);

    return (
        <Select className='text-black' placeholder="請選擇..." options={areaOption} value={area} onChange={(e) => {setArea(e)}} />
    )
  }
  
  export default AreaOption;