'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import detailCityOption from './data/detailCityOption';

function AreaDetailOption({ city, area, areaDetail ,setAreaDetail }) {
    const [areaOption, setAreaOption] = useState([]);
    useEffect(() => {
        console.log(city, area)
        if(city.length !== 0 && area.length !== 0){
            if(city.value !== undefined && area.value !== undefined){
                let option = [];
                for(let i=0; i < detailCityOption[city.value][area.value].length; i++){
                    option.push({label: detailCityOption[city.value][area.value][i], value: detailCityOption[city.value][area.value][i]});
                }
                setAreaOption(option);
            }
        }
      },[city, area]);

    return (
        <Select className='text-black' placeholder="請選擇..." options={areaOption} value={areaDetail} onChange={(e) => {setAreaDetail(e)}} />
    )
  }
  
  export default AreaDetailOption;