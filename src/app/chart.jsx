'use client';
import React from 'react';
import Image from 'next/image';
import detailCity from './data/detailCity';
import ReactECharts from 'echarts-for-react';

function Chart({voting, party}) {
    const option = {
        
    };

    return (
        <div>
            <ReactECharts option={option} />
        </div>
    )
  }
  
  export default Chart;