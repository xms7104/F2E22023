'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import cityOption from './data/cityOption';

function AreaOption({ city, area, setArea }) {
    const [areaOption, setAreaOption] = useState([]);
    console.log(city.value, cityOption[city.value])
    useEffect(() => {
        if(city.length !== 0){
            let option = [];
            for(let i=0; i < cityOption[city.value].length; i++){
                option.push({label: cityOption[city.value][i], value: cityOption[city.value][i]});
            }
            setAreaOption(option);
        }
      },[city]);

    return (
        <Select className='text-black' options={areaOption} value={area} onChange={(e) => {setArea(e)}} />
    )
  }
  
  export default AreaOption;