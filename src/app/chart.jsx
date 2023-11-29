'use client';
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import Accordion from 'react-bootstrap/Accordion';

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
                    if(item !== '有效票數'){
                        const votingNum = parseInt(partyInformation[item]['voting'].replace(/,/g, ''), 10);
                        const votingTotalNum = parseInt(partyInformation['有效票數'].replace(/,/g, ''), 10);
                        const votingProportion = ((votingNum / votingTotalNum) *100).toFixed(2);
                        return(
                            <div key={item} className='w-auto flex justify-start lg:items-baseline lg:mb-4 md:items-center md:mb-2 sm:mb-2'>
                                <p 
                                className='rounded-full h-[25px] w-[25px] text-sm text-white flex justify-center items-center mr-2'
                                 style={{backgroundColor: partyInformation[item]['color']}}>{index+1}</p>
                                <div className='border-r-2 border-solid mr-2 pr-2 w-max'
                                style={{borderColor: partyInformation[item]['color']}}>
                                    <p className='mb-2 font-semibold text-[18px]'>{item}</p>
                                    <p className='mb-2 text-sm w-[130px]'>
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

    function mobileLayout(){
        return (
            <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>投票概況</Accordion.Header>
              <Accordion.Body>
                <div className='grid justify-center items-center'>
                    <div className='w-full flex justify-start items-center md:h-[120px] sm:h-[120px]'>
                        <div className='inline-flex justify-start items-center w-[40%] md:h-[120px] sm:h-[120px]'>
                            <div className='w-[120px]'>
                                <ReactECharts option={votingChart} />
                            </div>
                            <div>
                                <p>
                                    {parseFloat(votingInformation['投票率']).toFixed(2)} %
                                </p>
                                <p>投票率</p>
                            </div>
                        </div>
                        <div className='ml-4 mb-4'>
                            <p className='mb-2'>
                                投票數 {" "} {votingInformation['投票數']} 票
                            </p>
                            <p className='mb-2'>
                                無效票數 {" "} {votingInformation['無效票數']} 票
                            </p>
                            <p className='mb-2'>
                                有效票數 {" "} {votingInformation['有效票數']} 票
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center md:h-[250px] sm:h-[250px]'>
                        <div className='w-[120px]'>   
                            <ReactECharts option={partyChart} />
                        </div>
                        <div>
                            {partyLayout()}
                        </div>
                    </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )
    }

    function pcLayout(){
        return(
            <div className='grid items-center lg:justify-start md:justify-center md:mb-2'>
                <p className='mb-0'>投票概況</p>
                <div>
                    <div className='xl:w-[23vw] lg:w-[23vw] md:w-[80vw] xl:grid lg:grid lg:justify-start lg:items-center md:w-[50vw] md:flex md:justify-start md:items-center'>
                        <div className='inline-flex justify-center lg:items-center md:items-center'>
                            <div className='w-[150px]'>
                                <ReactECharts option={votingChart} />
                            </div>
                            <div>
                                <p>
                                    {parseFloat(votingInformation['投票率']).toFixed(2)} %
                                </p>
                                <p>投票率</p>
                            </div>
                        </div>
                        <div className='md:ml-4'>
                            <p className='md:mb-2'>
                                投票數 {" "} {votingInformation['投票數']} 票
                            </p>
                            <p className='md:mb-2'>
                                無效票數 {" "} {votingInformation['無效票數']} 票
                            </p>
                            <p className='md:mb-2'>
                                有效票數 {" "} {votingInformation['有效票數']} 票
                            </p>
                        </div>
                    </div>
                    <div className='xl:w-[23vw] xl:grid lg:w-[23vw] lg:grid md:w-[60vw] md:flex md:justify-start md:items-start'>
                        <div className='w-[150px]'>   
                            <ReactECharts option={partyChart} />
                        </div>
                        <div>
                            {partyLayout()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
        <div className='xl:block lg:block md:hidden sm:hidden'>
            {pcLayout()}
        </div>
        <div className='xl:hidden lg:hidden md:block sm:block md:w-[92%] sm:w-[90vw] sm:my-0 sm:mx-auto sm:mb-4'>
            {mobileLayout()}
        </div>
        </>
    )
  }
  
  export default Chart;