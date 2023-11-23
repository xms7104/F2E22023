'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import detailCity from './data/detailCity';
import ReactECharts from 'echarts-for-react';

function Chart({voting, party, votingInformation, partyInformation}) {
    const [votingChart, setVotingChart] = useState({});
    const [partyChart, setPartyChart] = useState({});

    useEffect(() => {
        if(voting.length !== 0){
            let chart = {
                series: [
                    {
                      type: 'pie',
                      radius: ['40%', '70%'],
                      label: {
                        show: false,
                        position: 'center'
                      },
                      data: voting
                    }
                ]
            }
            setVotingChart(chart);
        }
    },[voting]);

    useEffect(() => {
        if(party.length !== 0){
            let chart = {
                series: [
                    {
                      type: 'pie',
                      radius: ['40%', '70%'],
                      label: {
                        show: false,
                        position: 'center'
                      },
                      data: party
                    }
                ]
            }
            setPartyChart(chart);
        }
    },[party]);

    function partyLayout(){
        if(partyInformation.length !== 0){
            const title = Object.keys(partyInformation);
            if(title.length !== 0){
                return title.map((item, index) => {
                    console.log(partyInformation[item]['voting'], item)
                    if(item !== '有效票數'){
                        const votingNum = parseInt(partyInformation[item]['voting'].replace(/,/g, ''), 10);
                        const votingTotalNum = parseInt(partyInformation['有效票數'].replace(/,/g, ''), 10);
                        const votingProportion = ((votingNum / votingTotalNum) *100).toFixed(2);
                        return(
                            <div key={item} className='flex justify-start items-baseline mb-4'>
                                <p 
                                className='rounded-full h-[25px] w-[25px] text-sm text-white flex justify-center items-center mr-2'
                                 style={{backgroundColor: partyInformation[item]['color']}}>{index+1}</p>
                                <div className='border-r-2 border-solid mr-2 pr-2 w-[40%]'
                                style={{borderColor: partyInformation[item]['color']}}>
                                    <p className='mb-2 font-semibold text-[18px]'>{item}</p>
                                    <p className='mb-2 text-sm'>
                                        {partyInformation[item]['cp']} ｜ {partyInformation[item]['cvp']}
                                    </p>
                                </div>
                                <div>
                                    <p className='mb-2'>
                                        {votingProportion} %
                                    </p>
                                    <p className='mb-2'>
                                        {partyInformation[item]['voting']}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        }
    }

    return (
        <div className='w-[30%]'>
            <div>
                <p>投票概況</p>
                <div className='inline-flex justify-center items-center'>
                    <div className='w-[150px]'>
                        <ReactECharts option={votingChart} style={{height:'150px'}} />
                    </div>
                    <div>
                        <p>
                            {parseFloat(votingInformation['投票率']).toFixed(2)} %
                        </p>
                        <p>投票率</p>
                    </div>
                </div>
                <div>
                    <p>
                        投票數 {" "} {votingInformation['投票數']} 票
                    </p>
                    <p>
                        無效票數 {" "} {votingInformation['無效票數']} 票
                    </p>
                    <p>
                        有效票數 {" "} {votingInformation['有效票數']} 票
                    </p>
                </div>
            </div>
            <div>
                <div className='w-[150px]'>   
                    <ReactECharts option={partyChart} style={{height:'150px'}} />
                </div>
                {partyLayout()}
            </div>
        </div>
        
    )
  }
  
  export default Chart;